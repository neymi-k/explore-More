import { redirect } from "react-router-dom";
import { addProduct } from "../../services/product.service";
import { getCurrentUser } from "../../services/auth.service";

export default function AddNewProduct() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = await getCurrentUser();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      places: formData.get("places"),
      category: formData.get("category"),
      image: formData.get("image"),
      date: formData.get("date"),
      user_id: id.userData.id,
    };
    console.log(data);
    try {
      await addProduct(data);
      alert("Producto agregado con éxito");
      redirect("/yourproducts");
    } catch (error) {
      alert("Error al agregar el producto");
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ¡Add your own Trip!
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Complete la informacion requerida para poder generar un nuevo producto
          que esté disponible para la venta.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Title of your trip
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="file"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Image
            </label>
            <div className="mt-2.5">
              <input
                type="file"
                name="image"
                id="image"
                className="file-input file-input-ghost w-full max-w-xs ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                name="date"
                id="date"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2.5">
              <select
                name="category"
                id="category"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              >
                <option disabled selected>
                  Choose a difficulty for your trip
                </option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Extreme</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="$"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Places available"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Places available
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="places"
                id="places"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-amber-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}
