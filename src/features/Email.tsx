import {
  Button,
  Html,
  Text,
  Heading,
  Section,
  Img,
  Hr,
} from "@react-email/components";
interface EmailProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const Email = ({ name, email, message, subject }: EmailProps) => {
  return (
    <Html>
      <div
        style={{
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
          lineHeight: "1.4",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div>
          <Img
            src="https://res.cloudinary.com/dg7wjmqp7/image/upload/v1738078099/us_adm9zu.jpg"
            width="100"
            height="100"
            alt="Me and my girlfriend"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center",
              outline: "solid 1px #3F3F3F",
              margin: "0 auto",
            }}
          />
        </div>
        <Heading
          style={{
            color: "#000010",
            marginBottom: "20px",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          Thank You for Contacting Me, {name}!
        </Heading>
        <Text style={{ fontSize: "16px", color: "#00000e" }}>
          I’ve received your message and will get back to you as soon as
          possible.
        </Text>
        <Text
          style={{
            fontSize: "16px",
            color: "#00000e",
            marginTop: "20px",
          }}
        >
          Here’s what you sent me:
        </Text>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            background: "#f9f9f9",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <Text>
            <strong>Subject:</strong> {subject}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
        </div>
        <Text
          style={{
            fontSize: "16px",
            color: "#00000e",
            marginTop: "20px",
          }}
        >
          If you need immediate assistance, feel free to reply to this email or
          click the button below to visit my website.
        </Text>
        <Button
          href="https://portfolio-clone-gamma.vercel.app/"
          style={{
            background: "#00000e",
            color: "#fff",
            padding: "12px 20px",
            marginTop: "20px",
            textDecoration: "none",
            border: "1px solid #111827",
            borderRadius: "5px",
          }}
        >
          Visit My Website
        </Button>
        <Text
          style={{
            fontSize: "14px",
            color: "#00000e",
            marginTop: "30px",
          }}
        >
          Best regards, <br />
          CosmoDev
        </Text>
      </div>
    </Html>
  );
};

export default Email;
