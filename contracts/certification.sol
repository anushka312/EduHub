// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certification {
    struct Certificate {
        string name;
        string uid;
        string coursename;
        string orgname;
        string ipfs_hash;
        string description;
    }

    mapping(string => Certificate) public certificates;
    event CertificateIssued(string certificate_id);

    function generateCertificate(
        string memory _certificate_id,
        string memory _name,
        string memory _uid,
        string memory _coursename,
        string memory _orgname,
        string memory _ipfs_hash,
        string memory _description
    ) public {
        require(
            bytes(certificates[_certificate_id].ipfs_hash).length == 0,
            "Certificate already exists"
        );

        Certificate memory cert = Certificate({
            name: _name,
            uid: _uid,
            coursename: _coursename,
            orgname: _orgname,
            ipfs_hash: _ipfs_hash,
            description: _description
        });

        certificates[_certificate_id] = cert;

        emit CertificateIssued(_certificate_id);
    }

    function getCertificate(string memory _certificate_id) 
        public 
        view 
        returns (
            string memory _uid, 
            string memory _name, 
            string memory _description, 
            string memory _coursename,
            string memory _orgname, 
            string memory _ipfs_hash
        ) 
    {
        Certificate memory cert = certificates[_certificate_id];

        require(
            bytes(cert.ipfs_hash).length != 0, 
            "Certificate does not exist"
        );

        return (
            cert.uid,
            cert.name,
            cert.description,
            cert.coursename,
            cert.orgname,
            cert.ipfs_hash
        );
    }

    function isVerified(string memory _certificate_id) public view returns (bool) {
        return bytes(certificates[_certificate_id].ipfs_hash).length != 0;
    }
}
