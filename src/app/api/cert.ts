export default interface Certification {
    title: string,
    link : string,
    thumbnail: string
}


export const certifcations: Certification[] = [
    {
      title: "CCNA Networking 1",
      link: "https://www.credly.com/badges/dc25122f-6542-4156-ba5b-6ca4b0b989cd/linked_in_profile",
      thumbnail : "/CCNA.png"
    },
    {
      title: "IT Specialist Python",
      link: "https://www.credly.com/badges/3395c826-8449-4710-8756-dd91ec998733/public_url",
      thumbnail : "/PYTHON.png"
    },
    {
      title: "GitHub Foundations",
      link: "https://www.credly.com/badges/9bd3f90d-6e7f-46b6-987b-a5d567956bb6/public_url",
      thumbnail : "/FOUNDATIONS.png"
    },
    {
      title: "Oracle Certified Professional-AI",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5902AED8C94E8FBB488F0BFE909F6088B1B562CFD0518B74F7A3F345354ED61D",
      thumbnail : "/ORACLE.png"
    },
  ]
