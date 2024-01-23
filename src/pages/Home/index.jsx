import CardGallerie from "../../components/CardGallerie";
import bannerImage from '../../assets/baner_1.png'
import Banner from '../../components/Banner';


const bannerText ="Chez vous, partout et ailleurs"; 
function Home() {
  return (
    <main className="home-container">
      <Banner text={bannerText} src={bannerImage} />
      <CardGallerie/>
    </main>
  );
}
export default Home;
