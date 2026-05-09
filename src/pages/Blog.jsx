import React, { useState } from 'react'

function Blog() {
  const [blogs , setBlogs] = useState([])
  const [formData , setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image:null 
  });

  const [editId , setEditID] = useState(null);

  // handleInput
  const handleChange = (e)=>{
    const {name , value , files} = e.target;

    if(name === "image"){
      setFormData({...formData , image:files[0]});
    }else{
      setFormData({...formData , [name]:value})
    }
  };

  // Add Or Updata Blog
  const handleSubmit = ()=>{
    if(!formData.title || !formData.content ) return;

    if(editId){
      // Updata
      setBlogs((prev)=>
        prev.map((blog)=>
        blog.id === editId ? {...formData , id: editId}:blog
    )
    );
    setEditID(null)
    }else{
      // Add
      const newBlog = {
        ...formData, 
        id:Date.now()
      };
      setBlogs([...blogs , newBlog]);
    }

    // Reset Form
    setFormData({
      title: "",
      content: "" ,
      author: "",
      image: null
    });
    
  }
  
      // Delete Blog
      const handleDelete = (id)=>{
        setBlogs(blogs.filter((b)=>b.id !== id ));
      };
  
      // Edit Blog
      const handleEdit = (blog)=>{
        setFormData(blog);
        setEditId(blog.id);
      };
  return (
    <div>
      <h1>Blog App</h1>
      {/* form */}
      <div>
        <input name='title'
        placeholder='Enter Your Blog Titel'
        value={formData.title} 
        onChange={handleChange}/>

        <input type="text" 
        name='author'
        placeholder='Author Name'
        value={formData.author}
        onChange={handleChange} />
      
        <textarea name='content'
        placeholder='Write You Blog...'
        value={formData.content}
        onChange={handleChange} />

        <input type='file' name='image' onChange={handleChange}  />

        <button onClick={handleSubmit}>
          {editId ? "Updata Blog" : "Add Blog"}
        </button>
      </div>

        {blogs.map((item)=>(
         <div key={item.id}>
          {item.image && (
            <img src={URL.createObjectURL(item.image)} alt="blog" />
          )}

          <div>
            <h3>{item.title}</h3>
            <p><b>{item.author}</b></p>
            <p>{item.content}</p>

            <div>
              <button onClick={()=>handleEdit(item)}>
                Edit
              </button>
              <button onClick={()=>handleDelete(item.id)}>
                Delete
              </button>
            </div>
          </div>

         </div>
        ))}

    </div>
  )
}

export default Blog
