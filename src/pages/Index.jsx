import { Container, Text, VStack, Box, Image } from "@chakra-ui/react";
import StripeLogo from "../assets/stripe-logo.png"; // Assuming you will add a Stripe logo image to this path

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} align="start">
        <Box>
          <Image src={StripeLogo} alt="Stripe logo" height="40px" />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">
          Congratulations Lovable Labs Incorporated!
        </Text>
        <Text fontSize="lg">
          You've just received your first payment through Stripe.
        </Text>
        <Text fontSize="lg">
          Your first payout for this payment of <Text as="span" fontWeight="bold">$10.00</Text> (minus any fees) should land in your bank account on <Text as="span" fontWeight="bold">12/28/23</Text>.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;