// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;

    // Contract Owner
    address payable public owner;

    // Counters for token IDs and items sold
    Counters.Counter private _tokenIds;

    // Listing price for tokens
    uint256 public listPrice = 0.01 ether;

    // Structure to represent a listed token
    struct ListedToken {
        uint256 price;
        bool currentlyListed;
    }

    // Mapping from token ID to listed token information
    mapping(uint256 => ListedToken) private idToListedToken;

    // Events
    event TokenListedSuccess(
        uint256 indexed tokenId,
        address indexed seller,
        uint256 price
    );

    // Constructor
    constructor() ERC721("NFTMarketplace", "NFTM") {
        owner = payable(msg.sender);
    }

    // Function to update the listing price
    function updateListPrice(uint256 _listPrice) external {
        require(msg.sender == owner, "Only the owner can update the list price");
        listPrice = _listPrice;
    }

    // Function to get the listing price
    function getListPrice() external view returns (uint256) {
        return listPrice;
    }

    // Function to create a new token
    function createToken(string memory tokenURI, uint256 price) external payable returns (uint256) {
        require(price >= listPrice, "Price must be at least the listing price");
        require(msg.value == listPrice, "Incorrect listing price");

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _listToken(newItemId, price);
        return newItemId;
    }

    // Private function to list a new token
    function _listToken(uint256 tokenId, uint256 price) private {
        idToListedToken[tokenId] = ListedToken({
            price: price,
            currentlyListed: true
        });

        _transfer(msg.sender, address(this), tokenId);
        emit TokenListedSuccess(tokenId, msg.sender, price);
    }

    // Function to get all NFTs
    function getAllNFTs() external view returns (ListedToken[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 listedItemCount = 0;

        for (uint256 i = 1; i <= totalItemCount; i++) {
            if (idToListedToken[i].currentlyListed) {
                listedItemCount++;
            }
        }

        ListedToken[] memory tokens = new ListedToken[](listedItemCount);
        uint256 index = 0;

        for (uint256 i = 1; i <= totalItemCount; i++) {
            ListedToken storage item = idToListedToken[i];
            if (item.currentlyListed) {
                tokens[index++] = item;
            }
        }
        return tokens;
    }

    // Function to get NFTs owned or listed by the caller
    function getMyNFTs() external view returns (ListedToken[] memory) {
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;

        for (uint256 i = 1; i <= totalItemCount; i++) {
            ListedToken storage item = idToListedToken[i];
            if (ownerOf(i) == msg.sender || item.currentlyListed) {
                itemCount++;
            }
        }

        ListedToken[] memory items = new ListedToken[](itemCount);
        uint256 index = 0;

        for (uint256 i = 1; i <= totalItemCount; i++) {
            ListedToken storage item = idToListedToken[i];
            if (ownerOf(i) == msg.sender || item.currentlyListed) {
                items[index++] = item;
            }
        }
        return items;
    }

    // Function to execute a sale
    function executeSale(uint256 tokenId) external payable {
        ListedToken storage listedToken = idToListedToken[tokenId];
        uint256 price = listedToken.price;

        require(msg.value == price, "Incorrect price sent");

        listedToken.currentlyListed = false;

        _transfer(address(this), msg.sender, tokenId);
        payable(owner).transfer(listPrice);
        payable(ownerOf(tokenId)).transfer(price);
    }
}
