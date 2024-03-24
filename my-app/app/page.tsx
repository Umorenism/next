import { DoublePage } from "./component/DoublePage";
import { FullPage } from "./component/FullPage";
import { Hero } from "./component/Hero";
import { LastPage } from "./component/LastPage";
import { PicPage } from "./component/PicPage";

import { VideoPage } from "./component/VideoPage";

export default function Home() {
  return (
    <div>
      <Hero
        heading="Mixed Textiles"
        message="i provide best wears for both male and female"
      />
      <PicPage />
      <DoublePage />
      <VideoPage />
      {/* <FullPage />
      <LastPage message="Sign up to newsletter for all the lastest news & discount" /> */}
    </div>
  );
}
