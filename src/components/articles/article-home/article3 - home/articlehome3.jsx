import './articlehome3.css';
import { article3 } from '../../../../article3.json';
export function ArticleHome3(){
    return(
        <>
        <ul className='content-articlehome3'>
            {article3.map(article => (
                <li className='cont-articlehome3-li'>
                    <article className='article-articlehome3' key={article.id}>
                        <a className='article-articlehome3-a' href="">
                            <img src={`../../public/img/${article.img}`} alt="" />
                        </a>
                        <a className='article-articlehome3-title' href="">{article.title}</a>
                    </article>
                </li>
            ))}
        </ul>
        </>
    )
}