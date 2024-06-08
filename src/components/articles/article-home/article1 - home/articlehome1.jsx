import "./articlehome1.css";
import { article1 } from "../../../../article1.json";
export function ArticleHome1(){
    return(
        <>
        <ul className="content-articlehome1">
            <li className="cont-articlehome1-li-impor">
                <article className="article-articlehome1-impor" key={article1[0].id}>
                    <a className="article-articlehome1-impor-a-img" href="">
                        <img className="article-articlehome1-impor-img" src={`/img/${article1[0].img}`}/>
                    </a>
                    <h1 className="article-articlehome1-impor-title">
                        <a className="article-articlehome1-impor-title-a" href="">{article1[0].title}</a>
                    </h1>
                    <p className="article-articlehome1-impor-description">{article1[0].description}</p>
                </article>
            </li>
            <li className="cont-articlehome1-li-dem">
                <article className="article-articlehome1-dem" key={article1[1].id}>
                    <a href=""><img src={`/img/${article1[1].img}`} alt="" /></a>
                    <h3 className="article-articlehome1-dem-title">
                        <a className="article-articlehome1-dem-a" href="">
                            {article1[1].title}
                        </a>
                    </h3>
                </article>
                <article className="article-articlehome1-dem" key={article1[2].id}>
                    <a href=""><img src={`/img/${article1[2].img}`}/></a>
                    <h3 className="article-articlehome1-dem-title">
                        <a className="article-articlehome1-dem-a" href="">
                            {article1[2].title}
                        </a>
                    </h3>
                </article>
            </li>
            <li className="cont-articlehome1-li-abs">
                <article className="article-articlehome1-abs" key={article1[3].id}>
                    <a href="">
                        <img src={`/img/${article1[3].img}`} alt="" />
                    </a>
                </article>
            </li>
        </ul>
        </>
    )
}