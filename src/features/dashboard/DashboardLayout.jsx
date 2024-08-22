import styled from "styled-components";
import { useRecentBooking } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useRecentstays } from "./useStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, booking, numDays } = useRecentBooking();
  const { isLoading: isLoading2, confirmedStays } = useRecentstays();
  const { isLoading: isLoading3, cabins } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  console.log(booking, numDays);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={booking}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
    <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={booking} numDays={numDays} /> 
      
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
