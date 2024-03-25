import social from '../assets/icons/social.png'


const Footer = () => {
    return (
        <footer className="p-10 bg-[#1A1919] text-white max-h-72">
            <div className="max-w-7xl mx-auto grid grid-cols-6 gap">

                <aside className='col-span-2 mr-28 space-y-4'>
                    <h1 className="text-4xl font-bold">Career Hub</h1>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={social} alt="" />
                </aside>
                <nav className='flex flex-col col-span-1 space-y-4'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest News</a>
                    <a className="link link-hover">Careers</a>
                </nav>
                <nav className='flex flex-col col-span-1 space-y-4'>
                    <h6 className="footer-title">Products</h6>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav className='flex flex-col col-span-1 space-y-4'>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                </nav>
                <nav className='flex flex-col col-span-1 space-y-4'>
                    <h6 className="footer-title">Contacts</h6>
                    <a className="link link-hover">524, Broadway, NYC</a>
                    <a className="link link-hover">+1777-978-5570</a> 
                </nav>

            </div>

        </footer>
    );
};

export default Footer;