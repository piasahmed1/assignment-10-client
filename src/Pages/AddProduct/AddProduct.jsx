import Swal from 'sweetalert2'


const AddProduct = () => {
  const handleProducts = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const url = form.url.value;

    const newProduct = { name, brand, price, description, rating, category, url}
    console.log(newProduct);
    
    // send data to the server

    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    } )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Product Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })

  }

  return (
    <div className="bg-[#F4F3F0]  p-24">
      <h2 className="text-3xl font-extrabold">Add a Product</h2>
      <form onSubmit={handleProducts}>
        {/* form row */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form price and short description */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <label className="input-group">
              <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form ratings and image */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form catagory and details */}

        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input type="text" name="url" placeholder="Photo URL" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <button className="md:w-1/2 ml-4"></button>
        <input type="submit" value="Add Product" className="btn btn-block bg-gray-950 text-white" />

      </form>
    </div>
  );
};

export default AddProduct;