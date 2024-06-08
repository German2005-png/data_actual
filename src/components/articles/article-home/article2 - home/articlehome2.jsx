import './articlehome2.css';
import { article2 } from '../../../../article2.json';
export function ArticleHome2(){
    return(
        <>
        <ul className='content-articlehome2'>
            {article2.map(article => (
                <li className='cont-articlehome2-li'>
                    <article className='article-articlehome2' key={article.id}>
                        <a className='article-articlehome2-a' href="">
                            <img src={`../../public/img/${article.img}`} alt="" />
                        </a>
                        <a className='article-articlehome2-title' href="">{article.title}</a>
                    </article>
                </li>
            ))}
        </ul>
        </>
    )
}