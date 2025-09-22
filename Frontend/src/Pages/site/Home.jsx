import CarouselHomePage from "../../components/Partials/CarouselHomePage"
import IntroSection from "../../components/Partials/IntroSection"
import LatestArrival from "../../components/Partials/LatestArrival"
import LatestBlog from "../../components/Partials/LatestBlog"
import Testimonial from "../../components/Partials/Testimonial"
import WeeklyDeals from "../../components/Partials/WeeklyDeals"

const Home = () => {
  return (
    <div>
      <CarouselHomePage />
      <IntroSection />      
      <LatestArrival />        
      <WeeklyDeals />           
      <LatestBlog />   
      <Testimonial />
    </div>
  )
}

export default Home