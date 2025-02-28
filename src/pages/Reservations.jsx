import { useState } from "react";
import emailjs from "emailjs-com";
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 1rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background-image: url("/images/reservation.png");
`;

const Heading = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: white;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 1.5rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.75rem;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: white;
  font-weight: bold;
  color: red;
  border: 1px solid black;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Reservations = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: ""
  });

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  };

  // Get the current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  };

  // Get the allowed time range based on selected date
  const getMinTime = () => {
    if (!form.date) return "12:00"; // Default minimum time is 12:00 PM

    const today = getTodayDate();
    if (form.date === today) {
      const now = getCurrentTime();
      return now > "12:00" ? now : "12:00"; // Ensure time is after current time if today
    }
    return "12:00"; // If future date, allow from 12:00 PM
  };

  const isTimeValid = (selectedTime) => {
    if (!selectedTime) return false;

    const [hours, minutes] = selectedTime.split(":").map(Number);
    const selectedMinutesTotal = hours * 60 + minutes;
    
    const openingTime = 12 * 60; // 12:00 PM in minutes
    const closingTime = 19 * 60 + 45; // 7:45 PM in minutes

    return selectedMinutesTotal >= openingTime && selectedMinutesTotal <= closingTime;
  };

  const isFormValid = () => {
    return (
      form.name &&
      form.email &&
      form.date &&
      form.time &&
      form.guests &&
      isTimeValid(form.time)
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please select a valid date and time (between 12:00 PM - 7:45 PM).");
      return;
    }

    try {
      const serviceID = "service_eha1odz";
      const templateID = "template_exhy6at";
      const userID = "ajr7Dmv_PJoqxu8CG";

      await emailjs.send(serviceID, templateID, form, userID);
      alert("Reservation was made successfully!");

      setForm({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: ""
      });
    } catch (error) {
      console.error("Failed to send reservation email", error);
      alert("Failed to send reservation email. Please try again.");
    }
  };

  return (
    <HeroContainer>
      <div className="p-10">
        <Heading>Reserve a Table</Heading>
        <FormContainer onSubmit={handleSubmit}>
          <InputField 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={form.name} 
            onChange={handleChange} 
            required 
          />
          <InputField 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
          <InputField 
            type="date" 
            name="date" 
            min={getTodayDate()} // Restrict past dates
            value={form.date} 
            onChange={handleChange} 
            required 
          />
          <InputField 
            type="time" 
            name="time" 
            min={getMinTime()} // Restrict based on today's date
            max="19:45" // 7:45 PM
            value={form.time} 
            onChange={handleChange} 
            required 
          />
          {!isTimeValid(form.time) && form.time && (
            <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.5rem" }}>
              Please select a time between 12:00 PM - 7:45 PM.
            </p>
          )}
          <InputField 
            type="number" 
            name="guests" 
            placeholder="Number of Guests"
            value={form.guests} 
            min="1" 
            max="10" 
            onChange={handleChange} 
            required 
          />
          <SubmitButton type="submit" disabled={!isFormValid()}>
            Reserve
          </SubmitButton>
        </FormContainer>
      </div>
    </HeroContainer>
  );
};

export default Reservations;
