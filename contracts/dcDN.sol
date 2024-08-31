// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DecentralizedCDN {

    struct Content {
        address uploader;
        string contentHash; // Hash of the content stored on a decentralized storage network
        uint256 uploadTime;
    }

    mapping(bytes32 => Content) public contents; // Mapping from content ID to Content
    mapping(address => bool) public approvedUploaders; // Mapping to manage approved uploaders
    address public admin; // Admin address for managing uploaders

    event ContentUploaded(bytes32 indexed contentId, address indexed uploader, string contentHash);
    event UploaderApproved(address indexed uploader);
    event UploaderRevoked(address indexed uploader);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    modifier onlyApprovedUploader() {
        require(approvedUploaders[msg.sender], "Not an approved uploader");
        _;
    }

    constructor() {
        admin = msg.sender; // Set the contract deployer as the admin
    }

    // Function to approve an uploader
    function approveUploader(address _uploader) external onlyAdmin {
        approvedUploaders[_uploader] = true;
        emit UploaderApproved(_uploader);
    }

    // Function to revoke an uploader
    function revokeUploader(address _uploader) external onlyAdmin {
        approvedUploaders[_uploader] = false;
        emit UploaderRevoked(_uploader);
    }

    // Function to upload content
    function uploadContent(bytes32 _contentId, string calldata _contentHash) external onlyApprovedUploader {
        require(contents[_contentId].uploader == address(0), "Content ID already exists");
        contents[_contentId] = Content({
            uploader: msg.sender,
            contentHash: _contentHash,
            uploadTime: block.timestamp
        });
        emit ContentUploaded(_contentId, msg.sender, _contentHash);
    }

    // Function to get content details
    function getContent(bytes32 _contentId) external view returns (Content memory) {
        return contents[_contentId];
    }

    // Function to change admin
    function changeAdmin(address _newAdmin) external onlyAdmin {
        admin = _newAdmin;
    }
}
