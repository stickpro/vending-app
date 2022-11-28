const tele = window.Telegram.WebApp;

function Card({ product }) {
    const onCheckout = () => {
        tele.MainButton.text = "Pay :)";
        tele.MainButton.show();
      };
    return (
        <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt=""
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="w-full">
            <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className="absolute inset-0"></span>
                { product.name }
            </h3>
            <button type="button" onClick={onCheckout} className="py-2.5 w-full px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Выбрать</button>
          </div>

        </div>
      </div>
    )
}

export default Card