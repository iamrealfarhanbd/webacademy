
import Articles from "../Components/Homepage/Articles";
import Brand from "../Components/Homepage/Brand";
import Facilities from "../Components/Homepage/Facilities";
import FeatureCat from "../Components/Homepage/Feature-cat";
import FeatureCourse from "../Components/Homepage/Feature-Course";
import Hero from "../Components/Homepage/Hero";
import MeetIns from "../Components/Homepage/Meet-Ins";
import Trip from "../Components/Homepage/Trip";

export default function Home() {
  return (
    <>
      <Hero />
      <Trip />
      <FeatureCat />
      <FeatureCourse />
      <Facilities />
      <MeetIns />
      <Articles />
      <Brand />
    </>
  )
}
