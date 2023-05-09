import Logo from "@/assets/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eos blanditiis placeat minus ratione dignissimos. Optio accusamus
            laboriosam quae accusantium ad, alias consequuntur quibusdam aut cum
            fugiat, doloribus laborum illum!
          </p>
          <p>&copy; {currentYear} EVOGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Careers</p>
            <p className="my-5">Sales</p>
            <p>Offers</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Email</p>
            <p className="my-5">(+254)746-960-449</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
