import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Authbox from "./components/Authbox";
import Home from "./routes/Home";
import Agave from "./routes/Agave";
import Amari from "./routes/Amari";
import Cocktology from "./routes/Cocktology";
import Cognac from "./routes/Cognac";
import Layout from "./components/Layout";
import Gin from "./routes/Gin";
import Liquers from "./routes/Liquers";
import Progress from "./routes/Progress";
import Rum from "./routes/Rum";
import Vermouth from "./routes/Vermouth";
import Vodka from "./routes/Vodka";
import Whiskey from "./routes/Whiskey";
import GetHelp from "./routes/GetHelp";
import PublicLayout from "./components/PublicLayout";
import HistoryOfVodka from "./routes/HistoryOfVodka";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/Authbox" element={<Authbox />} />
        </Route>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="progress" element={<Progress />} />
          <Route path="agave" element={<Agave />} />
          <Route path="amari" element={<Amari />} />
          <Route path="cocktology" element={<Cocktology />} />
          <Route path="cognac" element={<Cognac />} />
          <Route path="gin" element={<Gin />} />
          <Route path="liquers" element={<Liquers />} />
          <Route path="rum" element={<Rum />} />
          <Route path="vermouth" element={<Vermouth />} />
          <Route path="whiskey" element={<Whiskey />} />
          <Route path="getHelp" element={<GetHelp />} />
          <Route path="vodka" element={<Vodka />} />
          <Route
            path="/history-of-vodka"
            //replace the div with the History of Vodka component
            element={<HistoryOfVodka />}
          />
          <Route
            path="production-of-vodka"
            element={<div>production-of-vodka</div>}
          />
          <Route
            path="discussing-vodkas-taste-and-style"
            element={<div>tasty-taste</div>}
          />
          <Route
            path="discussing-vodkas-taste-and-style"
            element={<div>tasty-taste</div>}
          />
          <Route
            path="other-neutral-spirits"
            element={<div>Other Neutral Spirits</div>}
          />
          <Route
            path="baijiu-shochu-and-soju"
            element={<div>Baiju shochu and soju</div>}
          />
          <Route
            path="production-of-gin"
            element={<div>Production of Gin</div>}
          />
          <Route
            path="leading-styles-of-gin"
            element={<div>Leading Styles of Gin</div>}
          />
          <Route
            path="other-flavored-spirits"
            element={<div>Other Flavored Spirits</div>}
          />
          <Route
            path="juniper-flavored-spirit-drinks"
            element={<div>Juniper Flavored Spirits Drinks</div>}
          />
          <Route
            path="anise-flavored-spirit-drinks"
            element={<div>Anise flavored spirits drinks</div>}
          />
          <Route
            path="history-of-whiskey"
            element={<div>History of Whiskey</div>}
          />
          <Route
            path="production-of-whiskey"
            element={<div>Production of Whiskey</div>}
          />
          <Route path="scotch-whiskey" element={<div>Scotch Whiskey</div>} />
          <Route path="irish-whiskey" element={<div>Irish Whiskey</div>} />
          <Route
            path="history-of-american-whiskey"
            element={<div>History of American Whiskey</div>}
          />
          <Route path="bournon-whiskey" element={<div>Bourbon Whiskey</div>} />
          <Route
            path="tennesse-whiskey"
            element={<div>Tennesse Whiskey</div>}
          />
          <Route
            path="american-straight-whiskeys"
            element={<div>American Straight Whiskies</div>}
          />
          <Route
            path="canadian-whiskey"
            element={<div>Canadian Whiskey, Eh</div>}
          />
          <Route path="japanese-whisky" element={<div>Japanese Whisky</div>} />
          <Route path="indian-whisky" element={<div>Indian Whiskey</div>} />
          <Route
            path="whiskeys-from-around-the-world"
            element={<div>World Wide Whiskeys</div>}
          />
          <Route
            path="history-of-brandy"
            element={<div>History of Brandy</div>}
          />
          <Route
            path="production-of-brandy"
            element={<div>Production of Brandy</div>}
          />
          <Route path="grape-brandy" element={<div>Grape Brandy</div>} />
          <Route path="cognac" element={<div>Cognac</div>} />
          <Route
            path="the-cognac-region"
            element={<div>The Cognac Region</div>}
          />
          <Route
            path="production-of-cognac"
            element={<div>Production of Cognac</div>}
          />
          <Route path="armagnac" element={<div>Armagnac</div>} />
          <Route
            path="the-armagnac-region"
            element={<div>The Armagnac Region</div>}
          />
          <Route path="pisco" element={<div>Pisco</div>} />
          <Route
            path="history-of-Pisco"
            element={<div>History of Pisco</div>}
          />
          <Route
            path="production-of-pisco"
            element={<div>Producing Pisco</div>}
          />
          <Route path="peruvian-pisco" element={<div>Peruvian Pisco</div>} />
          <Route path="chilean-pisco" element={<div>Chilean Pisco</div>} />
          <Route path="calvados" element={<div>Calvados</div>} />
          <Route path="history-of-rum" element={<div>history of Rum</div>} />
          <Route
            path="/production-of-rum"
            element={<div>Production of Rum</div>}
          />
          <Route path="rhum-agricole" element={<div>rhum Agricole</div>} />
          <Route
            path="world-rums"
            element={<div>Rums from Around the World</div>}
          />
          <Route
            path="tasting-and-serving-rum"
            element={<div>Tasting and Serving Rum</div>}
          />
          <Route
            path="history-of-agave-based-spirits"
            element={<div>History of Agave based Spirits</div>}
          />
          <Route
            path="tequila"
            element={<div>Tequila, go fuck yourself</div>}
          />
          <Route
            path="production-of-tequila"
            element={<div>Production of Tequila</div>}
          />
          <Route
            path="tequila-production-region"
            element={<div>Tequila Produciong Region</div>}
          />
          <Route
            path="styles-of-tequila"
            element={<div>Styles of Tequila</div>}
          />
          <Route
            path="production-of-mezcal"
            element={<div>Production of Mezcal</div>}
          />
          <Route
            path="mezcal-producing-region"
            element={<div>Mezcal Producing Region</div>}
          />
          <Route
            path="tasting-and-serving-agave-spirits"
            element={<div>Tasting and serving Agave spirits</div>}
          />
          <Route
            path="history-of-liqueurs"
            element={<div>History of Liquers</div>}
          />
          <Route
            path="production-of-liquers"
            element={<div>Produciton of Liquers</div>}
          />
          <Route
            path="categorization-of-liqueurs"
            element={<div>Catagorizaiton of Liquers</div>}
          />
          <Route
            path="essential-liqueurs"
            element={<div>Essential Liquers</div>}
          />
          <Route path="herbal-liqueurs" element={<div>Herbal Liquers</div>} />
          <Route
            path="bean-nut-and-seed-liqueurs"
            element={<div>Bean, nut, and seed liqueurs</div>}
          />
          <Route path="cream-liqueurs" element={<div>Creamy liqueurs</div>} />
          <Route
            path="whiskey-liqueurs"
            element={<div>whiskey liqueurs</div>}
          />
          <Route
            path="the-taste-component-of-bitter"
            element={<div>Bitter</div>}
          />
          <Route path="vermouth" element={<div>vermouth</div>} />
          <Route
            path="new-world-vermouth"
            element={<div>new-world-vermouth</div>}
          />
          <Route
            path="vini-amari-bittered-wines"
            element={<div>vini-amari-bittered-wines</div>}
          />
          <Route path="quinquina" element={<div>quinquina</div>} />
          <Route path="americano" element={<div>americano</div>} />
          <Route path="spirit-amari" element={<div>spirit amari</div>} />
          <Route path="french-amer" element={<div>French Amer</div>} />
          <Route
            path="bittered-spirits-of-the-world"
            element={<div>Bittered Spirits of the world</div>}
          />
          <Route path="cocktology" element={<div>Cocktology</div>} />
          <Route
            path="modern-cocktology-and-craft-cocktails"
            element={<div>Modern Cocktology</div>}
          />
          <Route
            path="aromatized-wines"
            element={<div>aromatized wines</div>}
          />
          <Route
            path="professional-bar-equipment"
            element={<div>Professional Bar Equipment</div>}
          />
          <Route path="bar-terminology" element={<div>Bar Terminology</div>} />
          <Route path="methodology" element={<div>Methodology, What?</div>} />
        </Route>

        {/*..... end layout...*/}
      </Routes>
    </>
  );
};

export default App;
