import React, { useState } from "react";

interface IFormProps {
  selectedKit: string;
  formCompleted: boolean;
  onHandleCompleted: () => void;
  scrollToSection: () => void;
}

const Form = ({
  selectedKit,
  formCompleted,
  onHandleCompleted,
  scrollToSection,
}: IFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      date,
    } = event.currentTarget;
    try {
      setIsLoading(true);
      let sendEmailResponse = await fetch("api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
          date: date.value,
          kit: selectedKit,
        }),
      });
      if (sendEmailResponse.ok) {
        onHandleCompleted();
        scrollToSection();
      } else {
        throw new Error("Email error");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      action="#"
      method="POST"
      className="text-left text-xl sm:text-3xl"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="col-1">
          <div className="mb-4">
            <label htmlFor="first-name">First Name</label>
          </div>
          <input
            type="text"
            name="firstName"
            className="bg-transparent border-b-2 border-black outline-none w-full"
            required
          />
        </div>
        <div className="col-1">
          <div className="mb-4">
            <label htmlFor="last-name">Last Name</label>
          </div>
          <input
            type="text"
            name="lastName"
            className="bg-transparent border-b-2 border-black outline-none w-full"
            required
          />
        </div>
      </div>
      <div className="my-12">
        <div className="mb-4">
          <label htmlFor="form-email">Email</label>
        </div>
        <input
          type="email"
          name="email"
          className="bg-transparent border-b-2 border-black outline-none w-full"
          required
        />
      </div>
      <div className="my-12">
        <div className="mb-4">
          <label htmlFor="phone">Phone No.</label>
        </div>
        <input
          type="tel"
          name="phone"
          className="bg-transparent border-b-2 border-black outline-none w-full"
          required
        />
      </div>
      <div className="my-12">
        <div className="mb-4">
          <label htmlFor="phone">Address</label>
        </div>
        <input
          type="text"
          name="address"
          className="bg-transparent border-b-2 border-black outline-none w-full"
          required
        />
      </div>
      <div>
        <div className="mb-4">
          <label htmlFor="phone">Pick up date</label>
        </div>
        <div className="text-xl sm:text-2xl">
          <div className="my-4">
            <input
              className="form-radio text-red-500"
              type="radio"
              id="date"
              name="date"
              value="friday(2/12)"
              required
            />
            <span className="mx-4">Friday (2/12)</span>
          </div>
          <div className="my-4">
            <input
              className="form-radio text-red-500"
              type="radio"
              id="date"
              name="date"
              value="saturday(2/13)"
              required
            />
            <span className="mx-4">Saturday (2/13)</span>
          </div>
        </div>
      </div>
      <div className="my-16 text-center">
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-8 rounded-md"
          disabled={formCompleted}
        >
          {!isLoading ? "Request Order" : "Please wait..."}
        </button>
      </div>
    </form>
  );
};

export default Form;
