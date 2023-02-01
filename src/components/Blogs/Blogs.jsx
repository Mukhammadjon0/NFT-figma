import React from 'react'
import './Blogs.css'
import BlogImg from '../../assets/img/blogCont.png'
import BlogImg1 from '../../assets/img/blogCont1.png'
import BlogContent from './BlogContent'
function Blogs() {
    const blogContent = [
        {
            img: BlogImg, title: "What's in Store for NFT", id: 1
        },
        {
            img: BlogImg1, title: "No-Fee Trading", id: 2
        },
    ]
    return (
        <div>
            <div className="blog-texts">
                <div className="blog-head">
                    <h1>Now With More News and Blogs</h1>
                    <button>See All</button>
                </div>
                <div className="blog-text">
                    <p>This NFT website is a website that features buying and selling, news and blogs. Designed with a minimalist and informative concept</p>
                </div>
            </div>
            <div className="blog-content">
                {blogContent.map(item => <BlogContent key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Blogs