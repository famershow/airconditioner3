import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <div>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href={"https://coupons.fedevelop.cn/#/takeout"} target="_blank">
            点杯半价奶茶？
          </Link>
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" align="center">
        {" 公众号：前端develop "}
      </Typography>
    </div>
  );
}

export default Copyright;
