import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getUser() {
    return this.prisma.user.findFirst();
  }

  createUser() {
    return this.prisma.user.create({
      data: {
        name: 'Duncan Redford',
        username: 'duncan',
        bio: "Mickey Mouse is a cartoon character created in 1928 by Walt Disney, and is the mascot of The Walt Disney Company. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world's most recognizable fictional characters.",
        profilePictureURL:
          'https://images.unsplash.com/photo-1593757147298-e064ed1419e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
        career: 'Fashion designer',
        location: 'Pokhara, Nepal',
        tabs: ['Experience', 'Blog', 'Projects', 'Publications'],
      },
    });
  }

  createBlog() {
    return this.prisma.tab.create({
      data: {
        authorId: 'ff222ea9-befd-45fb-ba6f-8408560890b7',
        type: 'blog',
        content: JSON.stringify([
          { title: 'Living in Nepal', date: 'December 12, 2021' },
          { title: 'My Pixar Internship Experience', date: 'January 5, 2020' },
          { title: "New Year's Resolution", date: 'February 10, 2018' },
          {
            title: 'Passing the Technical Interview',
            date: 'February 2, 2018',
          },
        ]),
        name: 'Blog',
      },
    });
  }

  createExperience() {
    return this.prisma.tab.create({
      data: {
        authorId: 'ff222ea9-befd-45fb-ba6f-8408560890b7',
        type: 'experience',
        content: JSON.stringify([
          {
            company: 'Apple',
            logo: 'https://3axis.co/user-images/078yv54o.png',
            role: 'Side-end engineer',
            description:
              "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software and online services. Apple is the largest information technology company by revenue and, since January 2021, the world's most valuable compan",
            timespan: '2021-Present',
          },
          {
            company: 'Sony Pictures',
            logo: 'data:image/png;base64,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',
            role: 'CEO',
            description:
              'Sony Pictures Entertainment Inc. is an American diversified multinational mass media and entertainment studio conglomerate that produces, acquires, and distributes filmed entertainment through multiple platforms.',
            timespan: '2010-2013',
          },
          {
            company: 'Target',
            logo: 'https://brandlogos.net/wp-content/uploads/2015/05/target-logo-preview.png',
            role: 'Cashier',
            description:
              'Target Corporation is an American retail corporation. The eighth-largest retailer in the United States, it is a component of the S&P 500 Index.',
            timespan: '2008-2010',
          },
          {
            company: 'Muji',
            logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAkFBMVEX///9/ABl+ABR0AACHJDB5AAB8AAv69vegX2b58/V6AAB8AAilZ27o2tujZGpzAACHHy3Amp59ABDUu72GGin06+zi0dPRtrmnbHKeWmG+lpqpcXbZwsSsdnxuAAC3io6NMz3HpqmwfoOZT1eRPUbs4eKDDyKWSlK0hIney826j5PDn6OSQEqKKjaNND6dVV6AqFVyAAAEXUlEQVR4nO2be1uyMBiHJ2umI12iaaZ56GBq+vb9v90rO7AN0A7XZSH73X/lnrHYDQzYHggBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAOnCd4yvR0g1OtHKswqeb/BKJoC6zrhucz6gflaUjp3T2YOpGIl/Pp+NuNZZFz7ZIJGfs42dcRQ2X6NYNjptesEFl6YjZEtYzdfdRvp5Ph9p4fC+LWrb56OqMffyMnAN/95ulwXIHVzVy0LGxO9rIBWVx7R2wpY1tmB8LxQF/srH3QB0kLzZ2H4fpwN3/QXksAAevJnSdHxKDccD6JjQM1gGfm9AyPyQG46D5bEJPvNxBv/YOGtyEXpJQz4MGvdOhwnAQjgM2VZHX7zm4rYWDld8t09VVvm/l40EtHCRjdf3HegphznXxGRxMZFH1HPCt6nS0UpHnRBfbPa29A2b6JtS8FjfF9hZZ+2uBmukCOkwD2a9X2+XanweUNNTfagphykyx3fkAHOh9Yo9poKd6Gu2DcnD9oAfFRRroZkKCcmBP/wOr7MIIykE2DHYIuRb672FQDtpEd46N7OTB4UYZloM3/Vi0ziYPogYJzMFaPx6/EfKoOtpsfdXBoCYOzGsSy5bO2ENoDsx+0jvT8fRFOiwHtuev1kZoDhbqF+/17VVx2kG29v4dB6zKDh7VoNi82drR8RwO5NN4RR2YO+KVnk+RE+2BOTBPRpEuTZ+WfuagPczYyPmIi3GQX16T2Qg/ctC3eTYzOVF9MQ7yy6yy0z9yMHVmXi7MwY233K7eokNz0PPWGNW+hubAT79Rs2qhOfDTsNTs6ikHvIYOSOwOilTe1fIOpq6DtWnIXaS+cAduWqZebck72Di9iQa6HS9hI/YuqotzsHWOp151yzvwFmPZVrWzdxbq07wuR5RKefTOHpX8VlUHJS+FeQfEGzfp5HCYN3v3npp20RGlsjoWjiQ9klbVgXuQ9Sp8wYGz7wdiyijzHq1kSpNwnOzfe4NmvkJ1HbgHWWdjFBz0i5kJHukLN9k5xz1i3JMk1L+qrANn33VWTsGBWZQ7pkBmdRUzujKSnWqmsg7W2aBosrOKDk6fCExVOu6A6kyXyjqwmTYmS6/ogLQKKWsWoXu4PCaqadKBK+vA3sfl5AEpdUD2R48y3Zo6b+Wioizpq7IO7IBusnbLHJDFEQli7rRdJiESQxOvroPsoxzT41IHZCJKBkZO+27ju+LlwJn9SKQqDgY81sy0gwlTv/k/XUWYGrFwt9zsqf+5U8TFfdtvvUf9UyEWLecDtjHLWuYD8ndMbgxjvXf9lvrdfddVPrqGD3/bTUswHqdzj1HCGI3XdyRPe84ol59FRQlnotVxg9tu9s9vJufo3O8wfej+a3A+2E2WnSNVNtuPARU02T2N/vIjRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/xH9+PVQLaAFMDgAAAABJRU5ErkJggg==',
            role: 'Designer',
            description:
              'Ryohin Keikaku Co., Ltd., or Muji is a Japanese retail company which sells a wide variety of household and consumer goods. Muji\'s design philosophy is minimalist, and it places an emphasis on recycling, reducing production and packaging waste, and a no-logo or "no-brand" policy.',
            timespan: '2005-2007',
          },
          {
            company: 'Ferrari',
            logo: 'data:image/png;base64,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',
            role: 'Executive Chef',
            description:
              'Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari in 1939 out of the Alfa Romeo race division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.',
            timespan: '2004-2005',
          },
        ]),
        name: 'Experience',
      },
    });
  }

  createPortfolio() {
    return this.prisma.tab.create({
      data: {
        authorId: 'ff222ea9-befd-45fb-ba6f-8408560890b7',
        type: 'portfolio',
        content: JSON.stringify([
          {
            title: 'Cooking App',
            link: 'https://google.com',
            description: 'Learn to cook and store recipes',
            imageURL:
              'https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
          },
          {
            title: 'The People Project',
            link: 'https://google.com',
            description: 'Portraits of humans',
            imageURL:
              'https://images.unsplash.com/photo-1510060913381-972498103546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
          },
          {
            title: 'Photojournalism Portfolio',
            link: 'https://google.com',
            description: 'An international documentation',
            imageURL:
              'https://images.unsplash.com/photo-1522582451902-3545817f6046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhbWJvZGlhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
          },
          {
            title: 'Travel Project',
            link: 'https://google.com',
            description: 'Making change across the world',
            imageURL:
              'https://images.unsplash.com/photo-1554310603-d39d43033735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          },
        ]),
        name: 'Projects',
      },
    });
  }

  async getExperience() {
    return this.prisma.tab.findFirst({
      where: { authorId: 'ff222ea9-befd-45fb-ba6f-8408560890b7' },
    });
  }

  async getTab(tab: string, authorId: string) {
    return this.prisma.tab.findFirst({
      where: {
        name: tab,
        authorId,
      },
    });
  }

  async getData() {
    return this.prisma.user.findMany();
  }

  async deleteData() {
    return this.prisma.user.deleteMany();
  }
}
