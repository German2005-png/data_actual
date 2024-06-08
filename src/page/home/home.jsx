import { ArticleHome1 } from "../../components/articles/article-home/article1 - home/articlehome1.jsx";
import { ArticleHome2 } from "../../components/articles/article-home/article2 - home/articlehome2.jsx";
import { ArticleHome3 } from "../../components/articles/article-home/article3 - home/articlehome3.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import { Header } from "../../components/header/header.jsx";
import { Navegation } from "../../components/navegation/navegation.jsx";
import "./home.css";
export function PageHome(){
    return(
        <>
        <Navegation />
        <main>
            <div className="flex-header-main">
                <Header />
                <ArticleHome1 />
                <ArticleHome2 />
                <ArticleHome3 />
                <Footer />
            </div>
        </main>
        </>
    )
}