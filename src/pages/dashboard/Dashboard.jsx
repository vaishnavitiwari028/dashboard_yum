
import BreadcrumbAdmin from "../../components/breadcrumb_admin/BreadcrumbAdmin";
import RestaurantListCard from "../../components/cards/RestaurantListCard";
import ProductPagination from "../../components/swipers/ProductPagination";
import { restaurantsData } from "../../mock_data/chartsData";

const RestaurantList = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
       <BreadcrumbAdmin title="Restaurants List" subtitle="Restaurants" />
         <div className="mb-6 grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
          {restaurantsData?.map((restaurant) => (
            <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        <ProductPagination />
      </div>
    </div>
  );
};

export default RestaurantList;
