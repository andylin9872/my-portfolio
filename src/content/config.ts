import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string().optional(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    badge: z.string().optional(),
    heroImage: z.string().optional(),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'projects': projectCollection
}