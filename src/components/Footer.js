import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import GooglePlay from "../assets/google play download.png";
import AppStore from "../assets/app store download.png";

const Footer = () => {
    return (
        <div>
            <div className="border-t-2 border-gray-500 p-10 grid sm:grid-cols-3 lg:grid-cols-5 text-[#222222]">
                <div>
                    <h3 className="text-lg font-bold mb-5">Get support</h3>
                    <ul className="leading-[40px] mb-5 text-sm">
                        <li>Help Center</li>
                        <li>Live chat</li>
                        <li>Check order status</li>
                        <li>Refunds</li>
                        <li>Report abuse</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-5">Trade Assurance</h3>
                    <ul className="leading-[40px] mb-5 text-sm">
                        <li>Safe and easy payments</li>
                        <li>Money-back policy</li>
                        <li>On-time shipping</li>
                        <li>After-sales protections</li>
                        <li>Product monitoring services</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-5">
                        Source on Alibaba.com
                    </h3>
                    <ul className="leading-[40px] mb-5 text-sm">
                        <li>Request for Quotation</li>
                        <li>Membership program</li>
                        <li>Alibaba.com Logistics</li>
                        <li>Sales tax and VAT</li>
                        <li>Alibaba.com Reads</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-5">
                        Sell on Alibaba.com
                    </h3>
                    <ul className="leading-[40px] mb-5 text-sm">
                        <li>Start selling</li>
                        <li>Seller Central</li>
                        <li>Become a Verified Supplier</li>
                        <li>Partnerships</li>
                        <li>Download the app for suppliers</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-5">Get to know us</h3>
                    <ul className="leading-[40px] mb-5 text-sm">
                        <li>About Alibaba.com</li>
                        <li>Corporate responsibility</li>
                        <li>News center</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center px-10 pb-10">
                <div>
                    <ul className="flex gap-4 text-3xl text-gray-500">
                        <li>
                            <FaFacebookSquare />
                        </li>
                        <li>
                            <FaLinkedin />
                        </li>
                        <li>
                            <FaTwitter />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaYoutube />
                        </li>
                        <li>
                            <FaTiktok />
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <p>
                        Trade on the go with the{" "}
                        <span className="underline font-bold">
                            Alibaba.com app
                        </span>
                    </p>
                    <img className="w-[140px]" src={GooglePlay}></img>
                    <img className="w-[140px]" src={AppStore}></img>
                </div>
            </div>

            <div className="bg-gray-200 px-10 py-4 text-gray-600 text-sm space-y-2">
                <ul className="flex gap-2 justify-center items-center">
                    <li>AliExpress</li>
                    <li className="border-l-2 border-gray-600 px-2">
                        1688.com
                    </li>
                    <li className="border-l-2 border-gray-600 px-2">
                        Tmall Taobao World
                    </li>
                    <li className="border-l-2 border-gray-600 px-2">Alipay</li>
                    <li className="border-l-2 border-gray-600 px-2">Lazada</li>
                    <li className="border-l-2 border-gray-600 px-2">
                        Taobao Global
                    </li>
                </ul>

                <ul className="flex gap-2 justify-center items-center mt-5">
                    <li>Policies and rules</li>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <li>Legal Notice</li>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <li>Product Listing Policy</li>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <li>Intellectual Property Protection</li>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <li>Privacy Policy</li>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <li>Terms of Use</li>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <li>Integrity Compliance</li>
                </ul>

                <div className="flex gap-2 justify-center items-center ">
                    <p>© 1999-2024 Alibaba.com. All rights reserved.</p>
                    <p>浙公网安备 33010002000092号</p>
                    <p>浙B2-20120091-4</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
