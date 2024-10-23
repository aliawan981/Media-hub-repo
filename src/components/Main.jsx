import MainSection from '@/components/MainSection';
import Services from '@/components/Services';
import Collections from '@/components/Collections';
import Info from '@/components/Info';
import Sellers from '@/components/Sellers';
import DiscountProduct from '@/components/DiscountProduct';
export default function Main() {
  return (
    <>
      <MainSection />
      <Services />
      <Collections />
      <Info />
      <Sellers />
      <DiscountProduct />
    </>
  );
}
