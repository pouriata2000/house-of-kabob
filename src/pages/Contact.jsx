import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #5b1e31; /* Dark maroon color */
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
`;

const InfoBox = styled.div`
  background-color: #f5c7a9; /* Light peach background */
  padding: 2rem;
  flex: 1;
  border-radius: 20px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: 1rem;
`;

const MapBox = styled.div`
  flex: 1;
  max-width: 400px;
  margin: 1rem;
  iframe {
    width: 100%;
    height: 300px;
    border-radius: 10px;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #5b1e31;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #5b1e31;
  margin-bottom: 0.5rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <ContactContent>
        {/* Address Section */}
        <InfoBox>
          <Subtitle>Our Location</Subtitle>
          <Text><strong>8025 Harford Rd., Parkville, Maryland, 21234</strong></Text>
          <Text>Tuesday - Sunday: 12:00pm - 8:30pm</Text>
          <Text><strong>Tel:</strong> (410) 663-0211</Text>
          <Text><strong>Email:</strong> houseofkabob.parkville21234@gmail.com</Text>
        </InfoBox>

        {/* Map Section */}
        <MapBox>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6168.264219223376!2d-76.54315126034606!3d39.375886418449156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c808b12c6eb7eb%3A0xa963328fe2ec0805!2s8025%20Harford%20Rd%2C%20Parkville%2C%20MD%2021234!5e0!3m2!1sen!2sus!4v1740703128623!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapBox>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

