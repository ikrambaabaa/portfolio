import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce0 from "../../Assets/Projects/ecommerce0.jpg";
import ecommerce1 from "../../Assets/Projects/ecommerce1.jpg";
import ecommerce2 from "../../Assets/Projects/ecommerce2.jpg";
import ecommerce3 from "../../Assets/Projects/ecommerce3.jpg";
import ecommerce4 from "../../Assets/Projects/ecommerce4.jpg";
import ecommerce5 from "../../Assets/Projects/ecommerce5.jpg";
import ecommerce6 from "../../Assets/Projects/ecommerce6.jpg";
import ecommerce7 from "../../Assets/Projects/ecommerce7.jpg";
import ecommerce8 from "../../Assets/Projects/ecommerce8.jpg";
import ecommerce9 from "../../Assets/Projects/ecommerce9.jpg";

import hotel1 from "../../Assets/Projects/hotel1.png";
import hotel2 from "../../Assets/Projects/hotel2.png";
import hotel3 from "../../Assets/Projects/hotel3.png";

import car1 from "../../Assets/Projects/car1.jpg";
import car2 from "../../Assets/Projects/car2.jpg";
import car3 from "../../Assets/Projects/car3.jpg";
import car4 from "../../Assets/Projects/car4.jpg";
import car5 from "../../Assets/Projects/car5.jpg";
import car6 from "../../Assets/Projects/car6.jpg";
import car7 from "../../Assets/Projects/car7.jpg";


import Build1 from "../../Assets/Projects/Build1.jpg";
import Build2 from "../../Assets/Projects/Build2.jpg";
import Build3 from "../../Assets/Projects/Build3.jpg";

import gestion1 from "../../Assets/Projects/gestion1.jpg";
import gestion2 from "../../Assets/Projects/gestion2.jpg";
import gestion3 from "../../Assets/Projects/gestion3.jpg";
import gestion4 from "../../Assets/Projects/gestion4.jpg";
import gestion5 from "../../Assets/Projects/gestion5.jpg";
import gestion6 from "../../Assets/Projects/gestion6.jpg";






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ height: "100%" }}>
            <ProjectCard
              imgPaths={[ecommerce0, ecommerce1,ecommerce2,ecommerce3,ecommerce4,ecommerce5,ecommerce6,ecommerce7,ecommerce8,ecommerce9]}
              isBlog={false}
              title="Projet E-commerce"
              description="Ce projet e-commerce full stack vise à développer une boutique en ligne dynamique avec un backend en PHP natif et une interface responsive en HTML, CSS, Bootstrap 5 et Tailwind CSS. Il permet aux utilisateurs de parcourir un catalogue de produits, d’appliquer des filtres, d’ajouter des articles à un panier, puis de finaliser leur commande. La plateforme comprend également un système d’authentification (connexion/inscription) et une interface d’administration pour gérer les produits.
La base de données MySQL assure la gestion des utilisateurs, produits et commandes. L’utilisation de Bootstrap et Tailwind permet un design moderne et compatible avec tous les appareils. Le projet adopte une architecture MVC simplifiée pour structurer le code PHP de manière claire.
Il constitue une excellente introduction au développement web full stack, à la gestion des sessions, et aux bases de la sécurité web. Le site peut aussi évoluer vers un projet plus avancé ou une intégration dans un framework comme Laravel."
              ghLink="https://github.com/ikrambaabaa/ecommerce2.git"
            />
          </Col>

          <Col md={4} className="project-card" style={{ height: "100%" }}>
            <ProjectCard
              imgPaths={[hotel1,hotel2,hotel3]}
              isBlog={false}
              title="HotelBooking.io"
              description='HotelBooking est un site web statique développé en HTML, CSS et JavaScript, permettant aux utilisateurs de consulter les chambres d’un hôtel, de voir les prix, les services proposés, et d’envoyer une demande de réservation via un formulaire. La page d’accueil présente une bannière attrayante et une introduction à l’hôtel. La section "Nos chambres" affiche les différents types de chambres (standard, deluxe, suite) avec leurs photos et prix. Un formulaire de réservation permet aux utilisateurs de saisir leur nom, dates de séjour, type de chambre et email. La section "À propos" inclut les coordonnées de l’hôtel, ainsi qu’une carte Google Maps intégrée. La navigation est fluide grâce au scroll ou au menu. Le site utilise JavaScript pour valider le formulaire côté client. L’objectif est de fournir une interface simple et claire pour une réservation sans base de données, dans une version statique.'
              ghLink="https://github.com/TrickOuTreat/phpproject.git"
            />
          </Col>

          <Col md={4} className="project-card" style={{ height: "100%" }}>
            <ProjectCard
              imgPaths={[car1,car2,car3,car4,car5,car6,car7]}
              isBlog={false}
              title="Location de voitures"
              description="Le projet de location de voitures propose une expérience utilisateur fluide avec une interface intuitive permettant de rechercher, comparer et réserver des véhicules facilement. Il inclut un système de gestion des réservations en temps réel, affichant la disponibilité des voitures. Le paiement en ligne est sécurisé grâce à l'intégration de Stripe. Un tableau de bord utilisateur permet de gérer l’historique des réservations, le compte, et le suivi des paiements. Un tableau de bord administrateur permet de gérer les véhicules, les réservations, les utilisateurs et d’analyser les statistiques d’activité. Le front-end est développé avec JavaScript, Bootstrap et CSS pour une interface responsive. Le back-end utilise Laravel (PHP) pour gérer les données, et MySQL est utilisé pour la base de données. Des fonctionnalités avancées incluent l'authentification sécurisée, des avis clients sur les véhicules et la gestion des catégories de voitures par type et disponibilité."
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card" style={{ height: "100%" }}>
            <ProjectCard
              imgPaths={[Build1,Build2,Build3]}
              isBlog={false}
              title="Site Vitrine Professionnel avec React & Tailwind CSS"
              description="Ce projet a pour but de créer un site vitrine statique destiné aux petites entreprises souhaitant renforcer leur présence en ligne. Il utilise React.js pour construire une interface dynamique et modulaire, et Tailwind CSS pour une mise en page moderne, responsive et facile à personnaliser. L’outil Vite (ou Create React App) permet d'initialiser rapidement le projet et d'accélérer son exécution en local.
Le site est conçu comme un exemple simple, propre et professionnel, idéal pour les débutants en développement web. Il sert de modèle réutilisable pour des projets réels ou des portefeuilles.
Ce projet montre comment React et Tailwind peuvent être combinés efficacement pour créer une expérience utilisateur fluide. Il met l’accent sur les bonnes pratiques de structuration de composants et de design adaptatif.
Enfin, il offre une base solide pour apprendre à développer des interfaces modernes sans complexité inutile."
              ghLink="https://github.com/ikrambaabaa/reacttailwind.git"
            />
          </Col>
          <Col md={4} className="project-card" style={{ height: "100%" }}>
            <ProjectCard
              imgPaths={[gestion1,gestion2,gestion3,gestion4,gestion5,gestion6]}
              isBlog={false}
              title="Gestion de Stock"
              description="Ce projet Laravel avec Filament est une application web de gestion de stock et de commandes, intégrant un système d'authentification complet. Il permet de créer des commandes en plusieurs étapes : informations générales, détails de commande et récapitulatif, avec des fonctionnalités avancées comme la gestion dynamique des modes de règlement et des produits. Le calcul automatique des totaux est effectué en temps réel via Livewire, et les produits sont ajoutés ligne par ligne dans un tableau interactif. L'application utilise Tailwind CSS pour le design et permet une gestion fluide des utilisateurs via un système sécurisé d'authentification. 

L'interface administrateur moderne et intuitive est facilitée par Filament, avec des ressources pour gérer les CRUD des commandes, formulaires administratifs et tables interactives. Ce système est particulièrement adapté aux PME marocaines et peut être amélioré avec des fonctionnalités comme l'intégration de paiements en ligne, la gestion des stocks, l'export PDF, ou un tableau de bord analytique."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
