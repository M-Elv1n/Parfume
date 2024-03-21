import React from "react";
import { Link } from "react-router-dom";
import "./css/home.scss";
import Logo from "../logo.jpeg";
import BackgroundVideo from "../../components/BackgroundVideo";

export default function Home() {
  return (
    <div className="">
      <div className="container">
        <div className="home">
          <img src={Logo} className="logo" alt="" />
          <div className="home__container">
            <div className="home__men">
              <BackgroundVideo videoSource="https://s3-figma-videos-production-sig.figma.com/video/1100857911417136884/TEAM/c0d9/e7fb/-e3c9-4ad5-9443-d8a7606c4677?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=To2XRymWhroBIOobLROdlQxGGBfx2thnBhRlgqpo1FA8df2FMH0J~YSEOte3JdF3lVKu7kW0T9fjE63q~4jlLaMIRAXlO-FXWgalROcMsdNuo46LKVPaZiienOIoY5ahMz3zal1Br6NTAJp7mw6PpWGCADhVCKs87nTFuTdPmTkSIdQBtzTW0a-7R4A2IRXnscyVr8mQqLKJRxZAmHEQejDHKKQINgEkcqONLim20fMRf6gzUmy3ZLoAAgw-87JC4M7jUxk2i2iXcMdxzg4cd3gila5IraSUFLViqkHtxHHquYlhUPfr2Vf6-rkG8ilQGlRLz3CMtflZNotiGa7iZQ__" />
              <div className="home__women--container">
                <div className="home__men--text">
                  <p>Kişi</p>
                  <span>ətirləri</span>
                </div>
                <div>
                  <Link to={"/kisi-etirleri"}>Sifariş et</Link>
                </div>
              </div>
            </div>
            <div className="home__women">
              <BackgroundVideo videoSource="https://s3-figma-videos-production-sig.figma.com/video/1100857911417136884/TEAM/ede2/4977/-92f6-463e-8773-794ac5151fae?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RdyI12fTcsNsaoVqYb0rn8fkBoURXz4N2Bd3IoHl2kRuQzKXw9vJfxlhEeODHAX~F9UwrdfP8z6FSkaSupzjWmO3H60-lMqTeTmKW3Yb9l3aAbpDlFeD0loNdxNnbzitpoQqWxiDiD6i0KVJTYn1f7dN~fa4yqN0PbPfxUsFhnLG1MDIbbrPM9I-QxLW6a6uK5J09966G8ATOEghlfa4flOdkDSJmsAsnDwbNs6wUgqaURt0Eca1X6tmfqrJ1tdXJx4Lkx7gUn4PST~DWusPwIs7f91meF~FXugsvsIZCJzvj1q4PN2XR7kQHkEBz34wPYd209hl8~36OGe6grcw7w__" />
              <div className="home__women--container">
                <div className="home__women--text">
                  <p>Qadın</p>
                  <span>ətirləri</span>
                </div>
                <div>
                  <Link to={"/qadin-etirleri"}>Sifariş et</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
