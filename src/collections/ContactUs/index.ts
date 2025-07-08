// collections/Contectus.ts
import { CollectionConfig } from "payload";

export const ContactUs: CollectionConfig = {
  slug: 'contactUs',
  access: {
    create: () => true, 
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: {
        placeholder: "Your name",
      },
    },
    {
      name: "phone",
      type: "text",
      required: true,
      admin: {
        placeholder: "Your contact number",
      },
    },
    {
      name: "email",
      type: "text",
      admin: {
        placeholder: "Your email",
      },
    },
    {
      name: "occupation",
      type: "text",
      admin: {
        placeholder: "Your current occupation",
      },
    },
    {
      name: "message", 
      type: "textarea",
      admin: {
        placeholder: "Your message",
      },
    },
  ],
};
