import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonText from "../../ui/ButtonText";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import BookingDataBox from "./BookingDataBox";
import { useCheckout } from "../../features/check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();

  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isLoading: isDeleting } = useDeleteBooking();

  if (isLoading) return <Spinner />;

  if (!booking) return <Empty resource="booking" />;
  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  // We return a fragment so that these elements fit into the page's layout
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading type="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={() => navigate(-1)}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName={"booking"}
              disabled={isDeleting} 
              onConfirm={() => {
                deleteBooking(bookingId,{onSettled:()=>navigate(-1)});
              }}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary">Back</Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
