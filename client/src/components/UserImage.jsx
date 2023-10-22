import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfsH2I1TXsaqDL5RgYdhfba5xm0BCa40CUovsxc36BtjhdQbJ5LXgwUoAf01QBWvkPfc&usqp=CAU'}
      />
    </Box>
  );
};

export default UserImage;
