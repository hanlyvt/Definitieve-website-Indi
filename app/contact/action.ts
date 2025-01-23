"use server";

export async function submitContactForm(formData: FormData) {
  // Simulate form submission delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Here you would typically send an email or store the message
  console.log({ name, email, message });

  return {
    success: true,
    message: "Thank you for your message. I will get back to you soon!",
  };
}
