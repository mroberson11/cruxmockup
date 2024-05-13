import React from "react";
import AltNav from "../AltNav";
import CruxHead from "../CruxHead";
import Footer from "../Footer";
import { useAnimation } from "framer-motion";
import { useMyAnimation } from "../../hooks/useMyAnimation";
import { AnimatedButton } from "../ButtonElements";
import Link from "next/link";
import {
  Container,
  MaintenanceContainer,
  MaintenanceWrapper,
  Heading,
  MaintenanceItem,
  MaintenanceIcon,
  MaintenanceText,
  BtnWrapper,
  Server,
  Globe,
  SSL,
  Database,
  Image,
  PuzzlePiece,
  Handshake,
  Shield,
  Tags,
} from "./MaintenanceElements";

const Maintenance = () => {
  const animation = useAnimation();
  const { ref, initial } = useMyAnimation({ animation });
  return (
    <>
      <CruxHead title="Website Maintenance | Mississippi Web Design" />
      <Container>
        <AltNav />
        <MaintenanceContainer ref={ref}>
          <Heading
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            Maintenance Services
          </Heading>
          <MaintenanceWrapper
            initial={initial}
            transition={{ delay: 0.7, duration: 0.6 }}
            animate={animation}
          >
            <MaintenanceItem>
              <MaintenanceIcon>
                <Server />
              </MaintenanceIcon>
              <MaintenanceText>Web Hosting Renewal</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <Globe />
              </MaintenanceIcon>
              <MaintenanceText>Web Domain Renewal</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <SSL />
              </MaintenanceIcon>
              <MaintenanceText>SSL Certificate Renewal</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <Database />
              </MaintenanceIcon>
              <MaintenanceText>Continual Website Backups</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <Image />
              </MaintenanceIcon>
              <MaintenanceText>Unlimited Content Updates</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <PuzzlePiece />
              </MaintenanceIcon>
              <MaintenanceText>Unlimited Plugin Additions</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <Handshake />
              </MaintenanceIcon>
              <MaintenanceText>24/7 Technical Support</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <Shield />
              </MaintenanceIcon>
              <MaintenanceText>Security Patches</MaintenanceText>
            </MaintenanceItem>
            <MaintenanceItem>
              <MaintenanceIcon>
                <Tags />
              </MaintenanceIcon>
              <MaintenanceText>
                Three Free Months with Every Site
              </MaintenanceText>
            </MaintenanceItem>
          </MaintenanceWrapper>
          <BtnWrapper
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link href="/pricing" passHref>
              <AnimatedButton
                primary="true"
                dark="true"
                duration={500}
                exact="true"
                offset={-80}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 3 }}
                style={{
                  background: "var(--cruxBlue)",
                  color: "var(--offWhite)",
                }}
              >
                View Pricing
              </AnimatedButton>
            </Link>
          </BtnWrapper>
        </MaintenanceContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Maintenance;
