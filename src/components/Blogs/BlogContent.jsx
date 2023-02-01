import React from 'react'
import './Blogs.css'
function BlogContent({ img, title }) {
    return (
        <div>
            <div style={{ backgroundImage: `url(${img})` }} className="blog-img">
                <div className="blog-img-text">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default BlogContent