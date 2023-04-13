import { sanityClient, urlFor } from "../lib/sanity";
import { headQuery, routesQuery, navSlugsQuery, footerSlugsQuery } from "../lib/globalFetch";

import styled from "styled-components";

import Navbar from "../components/navbar/Navbar";
import colors from "../settings/colors";
import bp from "../settings/breakpoints";

import bg from "../assets/images/backgrounds/windmill_background.jpg";
import TextBlock from "../components/textComponents/TextBlock";
import Ingress from "../components/textComponents/Ingress";
import TextBox from "../components/textComponents/TextBox";
import Grid from "../settings/grid";
import Footer from "../components/footer/Footer";
import Owners from "../components/owners/Owners";
import Timeline from "../components/timeline/Timeline";
import LinkBlock from "../components/linkBlock/LinkBlock";
import SimpleHeader from "../components/header/SimpleHeader";
import Page from "../components/PageWrapper/Page";

const List = styled.ul`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${bp.mobileBreak} {
    padding-left: 0px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Contact({ contact, head, navRoutes, footerRoutes  }) {
  const address = contact[0].address;
  const email = contact[0].email;
  const person = contact[0].person;

  return (
    <>
      <Page data={head}>
        <Navbar navRoutes={navRoutes} />

        <SimpleHeader
          block={{
            title: "Contact",
          }}
        />
        <TextBlock>
          <Ingress title={"Contact us"}>
            <ListContainer>
              {person?.length > 0 &&
                address.map((a, i) => {
                  
                  return (
                    <List key={a._key}>
                      <li>{a.label}</li>
                      <li>{a.street}</li>
                      <li>{`${a.postal} ${a.city}`}</li>
                      <li>{a.country}</li>
                    </List>
                  );
                })}

              {person?.length > 0 &&
                email.map((e, i) => {
                  return (
                    <List key={i+ e}>
                      <li>Email:</li>
                      <li>{e}</li>
                    </List>
                  );
                })}

              {person?.length > 0 &&
                person.map((p) => {
                  return (
                    <List key={p._key}>
                      <li>{p.title}</li>
                      <li>{p.name}</li>
                      <li>{p.email}</li>
                      <li>{p.phone}</li>
                    </List>
                  );
                })}
            </ListContainer>
          </Ingress>
        </TextBlock>
        <LinkBlock
          block={{ title: "More on Vindmark", linkText: "Projects", to: "/" }}
        />
        <Footer block={head[0]?.footer} footerRoutes={footerRoutes} />
      </Page>
    </>
  );
}

const contactsQuery = `*[_type == "siteContacts"]{
        address,
        email,
        person
      }`;

export async function getStaticProps() {
  const head = await sanityClient.fetch(headQuery);
  const routes = await sanityClient.fetch(routesQuery);
  const contact = await sanityClient.fetch(contactsQuery);
  const navRoutes = await sanityClient.fetch(navSlugsQuery);
  const footerRoutes = await sanityClient.fetch(footerSlugsQuery);

  return { props: { contact, head, navRoutes, footerRoutes } };
}
