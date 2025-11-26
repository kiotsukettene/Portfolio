import { defineField, defineType } from "sanity";

export default defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headline",
            title: "Professional Headline",
            type: "string",
            description: "E.g. 'Backend Developer, DevOps, & AI Engineer'",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headlineStaticText",
            title: "Headline Static Text",
            type: "string",
            description: "E.g. 'I am a', 'I specialize in', 'I create', etc.",
            placeholder: "I am a",
        }),
        defineField({
            name: "headlineAnimatedWords",
            title: "Headline Animated Words",
            type: "array",
            description: "Words that will animate in the headline.",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headlineAnimationDuration",
            title: "HeadLine Animation Duration (ms)",
            type: "number",
            description: 
            "How long each words stay visible before flipping (default: 3000ms)",
            initialValue: 3000,
            validation: (Rule) => Rule.required().min(1000).max(10000),
        }),
        defineField({
            name: "shortBio",
            title: "Short Bio",
            type: "text",
            rows: 3,
            description: "A brief introduction to yourself.",
            validation: (Rule) => Rule.required().max(300),
        }),
        defineField({
            name: "fullBio",
            title: "Full Bio",
            type: "array",
            of: [{ type: "block" }],
            description: "A detailed introduction to yourself.",
        }),
        defineField({
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alt Text",
                    description: "Important for SEO and accessibility."
                },
            ],
        }),
            
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) => Rule.required().email(),
          }),
          defineField({
            name: "phone",
            title: "Phone Number",
            type: "string",
          }),
          defineField({
            name: "availability",
            title: "Availability Status",
            type: "string",
            options: {
              list: [
                { title: "Available for hire", value: "available" },
                { title: "Open to opportunities", value: "open" },
                { title: "Not looking", value: "unavailable" },
              ],
            },
          }),
          defineField({
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            fields: [
              { name: "github", title: "GitHub", type: "url" },
              { name: "linkedin", title: "LinkedIn", type: "url" },
              { name: "twitter", title: "Twitter/X", type: "url" },
              { name: "website", title: "Personal Website", type: "url" },
              { name: "medium", title: "Medium", type: "url" },
              { name: "devto", title: "Dev.to", type: "url" },
              { name: "youtube", title: "YouTube", type: "url" },
              { name: "stackoverflow", title: "Stack Overflow", type: "url" },
            ],
          }),
          defineField({
            name: "yearsOfExperience",
            title: "Years of Experience",
            type: "number",
            validation: (Rule) => Rule.min(0),
          }),
          defineField({
            name: "stats",
            title: "Profile Statistics",
            type: "array",
            description: "Key statistics to display on your about section",
            of: [
              {
                type: "object",
                fields: [
                  {
                    name: "label",
                    title: "Label",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                  },
                  {
                    name: "value",
                    title: "Value",
                    type: "string",
                    description: "E.g., '50+', '100%', '24/7'",
                    validation: (Rule) => Rule.required(),
                  },
                ],
                preview: {
                  select: {
                    title: "label",
                    subtitle: "value",
                  },
                },
              },
            ],
          }),
    ],
    preview: {
        select: {
          title: "firstName",
          subtitle: "headline",
          media: "profileImage",
        },
        prepare(selection) {
          const { title, subtitle, media } = selection;
          return {
            title: title,
            subtitle: subtitle,
            media: media,
          };
        },
      },
})