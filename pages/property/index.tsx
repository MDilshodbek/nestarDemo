import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("PropertyList Component - Pages Router");

  return <Container>PROPERTY LIST</Container>;
};

export default withLayoutBasic(PropertyList);
