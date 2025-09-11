import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { SiteLayout } from "@/components/site-layout"

type Article = {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  category: string
  content?: ReactNode
}

const articles: Article[] = [
  {
    slug: "ia-bilan-psychomoteur-gagner-2h",
    title: "IA et bilans cliniques : comment gagner 2h par dossier",
    excerpt:
      "Standardisez vos trames, automatisez les calculs et générez un premier jet intelligent. Découvrez comment un logiciel d’IA pour bilan psychomoteur vous fait gagner jusqu’à 2 h par dossier.",
    author: "Bilan Plume",
    date: "2025-08-22",
    category: "Innovation",
    image: "/intelligence-artificielle-sante.png",
    content: (
      <>
        <p><strong>TL;DR.</strong> En standardisant votre trame, en automatisant les calculs et en générant un premier jet intelligent, un <strong>logiciel d’IA pour bilan clinique</strong> permet de <strong>gagner jusqu’à 2 heures par bilan psychomoteur</strong> — sans sacrifier la finesse clinique ni la conformité.</p>

        <h2>Pourquoi vos bilans prennent trop de temps</h2>
        <p>Un bilan complet, c’est souvent <strong>3 à 5 h</strong> au total. Les goulets d’étranglement sont connus :</p>
        <ul>
          <li><strong>Saisie & nettoyage d’informations</strong> (anamnèse, retours parents/enseignants, notes de consultation).</li>
          <li><strong>Calculs & conversions</strong> (notes brutes, étalonnées, rangs percentiles, interprétations).</li>
          <li><strong>Rédaction & mise en forme</strong> (cohérence de style, reformulations, relectures).</li>
          <li><strong>Personnalisation finale</strong> (recommandations adaptées au profil, objectifs, suivi).</li>
        </ul>

        <p>Résultat : des soirées perdues, une variabilité de qualité, et la frustration de faire du copier-coller répétitif.</p>

        <h2>Comment l’IA réduit concrètement le temps par bilan</h2>
        <p>Un <strong>logiciel d’IA pour bilan clinique</strong> agit sur chaque étape à faible valeur ajoutée :</p>
        <ol>
          <li><strong>Trames intelligentes et champs structurés</strong> — Sections standardisées (anamnèse, motricité globale/fine, praxies, attention, graphisme, recommandations…).</li>
          <li><strong>Saisie assistée & OCR</strong> — Import des notes et questionnaires ; extraction de données clés ; <strong>pré‑remplissage</strong> des tableaux résultats.</li>
          <li><strong>Calculs automatiques</strong> — Conversions, seuils d’interprétation et <strong>phrases‑bilan paramétriques</strong>.</li>
          <li><strong>Premier jet de compte‑rendu</strong> — Texte initial fidèle à la trame : synthèse, résultats, interprétation, conclusion, recommandations.</li>
          <li><strong>Bibliothèque de formulations & recommandations</strong> — Reformulations naturelles et banque de stratégies adaptées au profil.</li>
          <li><strong>Mise en page & exports</strong> — Style unifié, <strong>PDF/Docx</strong> propres, versions courte/longue.</li>
        </ol>

        <h2>Workflow type : gagner 2h sans changer votre pratique</h2>
        <ol>
          <li><strong>Ouvrir une trame</strong> adaptée (enfant/ado/adulte).</li>
          <li><strong>Importer</strong> anamnèse & notes (coller, déposer, ou dicter).</li>
          <li><strong>Saisir les résultats</strong> des épreuves (ou importer un tableau).</li>
          <li>L’outil <strong>calcule & interprète</strong> les scores selon vos règles.</li>
          <li>L’IA <strong>propose un premier jet</strong> → vous ajustez, signez, exportez.</li>
        </ol>

        <h3>Avant / après (exemple de répartition du temps)</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Étape</th>
                <th>Sans IA</th>
                <th>Avec IA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saisie + nettoyage infos</td>
                <td>25 min</td>
                <td>8 min</td>
              </tr>
              <tr>
                <td>Calculs & conversions</td>
                <td>20 min</td>
                <td>2 min</td>
              </tr>
              <tr>
                <td>Rédaction (premier jet)</td>
                <td>60 min</td>
                <td>15 min</td>
              </tr>
              <tr>
                <td>Relectures & mise en page</td>
                <td>30 min</td>
                <td>8 min</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>135 min</strong></td>
                <td><strong>33 min</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Gain typique : ~100 min à 2 h selon la complexité et vos trames.</em></p>

        <h2>Qualité clinique : garder la main, gagner en constance</h2>
        <ul>
          <li><strong>Vous décidez</strong> des seuils, de la terminologie, des modèles de paragraphes.</li>
          <li>Les <strong>traces</strong> (résultats, sources, décisions) restent visibles et auditables.</li>
          <li>Le texte généré est <strong>éditable</strong> partout ; les reformulations sont <strong>guidées par vos consignes</strong>.</li>
          <li><strong>Cohérence</strong> des conclusions entre praticiens et au fil du temps.</li>
        </ul>

        <h2>Conformité & données (l’essentiel à vérifier)</h2>
        <ul>
          <li><strong>Hébergement conforme RGPD</strong> (et HDS si données de santé hébergées).</li>
          <li><strong>Journalisation & contrôle d’accès</strong> (qui voit quoi, quand).</li>
          <li><strong>Chiffrement</strong> au repos et en transit.</li>
          <li><strong>Pas d’utilisation des données</strong> à des fins d’entraînement par des tiers.</li>
          <li><strong>Exports & portabilité</strong> faciles.</li>
        </ul>

        <h2>Cas d’usage « IA bilan psychomoteur »</h2>
        <ul>
          <li><strong>Bilan psychomoteur enfant</strong> : anamnèse + observations + tests → synthèse claire et recommandations contextualisées.</li>
          <li><strong>Suivi et réévaluation</strong> : dupliquer le bilan initial, <strong>comparer les scores</strong> et <strong>générer un addendum</strong>.</li>
          <li><strong>Communication école/orthophoniste</strong> : version courte, vocabulaire adapté, focus retombées pratiques.</li>
        </ul>

        <h2>Bonnes pratiques pour démarrer</h2>
        <ul>
          <li><strong>Figer une trame canon</strong> (H2/H3, champs structurés, seuils).</li>
          <li><strong>Lister des paragraphes‑types</strong> (norme/fragilité/trouble ; recommandations par profil).</li>
          <li><strong>Définir des règles de style</strong> (ton, personne, longueur, termes pros/parents).</li>
          <li><strong>Commencer sur 5–10 dossiers</strong> pilotes, puis généraliser.</li>
        </ul>

        <h2>FAQ</h2>
        <p><strong>L’IA remplace‑t‑elle mon jugement clinique ?</strong><br/>Non. Elle <strong>automatise la mécanique</strong> (saisie, calculs, mise en forme) et vous laisse la <strong>décision clinique</strong>.</p>
        <p><strong>Puis‑je intégrer mes propres trames et tests ?</strong><br/>Oui. Champs, seuils et modèles de phrases sont <strong>paramétrables</strong>.</p>
        <p><strong>Et si mes données sont sensibles ?</strong><br/>Choisissez un hébergement <strong>conforme</strong> (RGPD/HDS si nécessaire), avec chiffrement et contrôle d’accès granulaire.</p>
        <p><strong>Le texte « fait IA » se repère‑t‑il ?</strong><br/>En paramétrant votre style et en <strong>révisant</strong> le premier jet, vous obtenez un rendu <strong>naturel et personnel</strong>.</p>
        <p><strong>Quel temps de prise en main ?</strong><br/>Généralement <strong>1 à 2 séances</strong> suffisent pour maîtriser trames, saisie et export.</p>

        <h2>Appel à l’action</h2>
        <p>Prêt·e à tester un <strong>logiciel d’IA pour bilan clinique</strong> qui <strong>fait gagner jusqu’à 2 h par dossier</strong> ? <Link href="/essai-gratuit">Demandez une démo</Link> et repartez avec une trame prête à l’emploi + un premier jet sur l’un de vos cas.</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"L’IA remplace‑t‑elle mon jugement clinique ?","acceptedAnswer":{"@type":"Answer","text":"Non. Elle automatise la mécanique (saisie, calculs, mise en forme) et vous laisse la décision clinique."}},
    {"@type":"Question","name":"Puis‑je intégrer mes propres trames et tests ?","acceptedAnswer":{"@type":"Answer","text":"Oui. Champs, seuils et modèles de phrases sont paramétrables selon votre pratique."}},
    {"@type":"Question","name":"Et si mes données sont sensibles ?","acceptedAnswer":{"@type":"Answer","text":"Choisissez un hébergement conforme (RGPD/HDS si nécessaire), avec chiffrement et contrôle d’accès granulaire."}},
    {"@type":"Question","name":"Quel temps de prise en main ?","acceptedAnswer":{"@type":"Answer","text":"Généralement 1 à 2 séances suffisent pour maîtriser trames, saisie et export."}}
  ]
}`
          }}
        />
      </>
    ),
  },
  {
    slug: "tests-fonctions-executives-enfant",
    title: "Quels tests utiliser pour évaluer les fonctions exécutives chez l’enfant ?",
    excerpt:
      "NEPSY-II, Figure de Rey, MABC : comment choisir et interpréter les tests des fonctions exécutives chez l’enfant, avec exemples concrets et FAQ.",
    author: "Bilan Plume",
    date: "2025-08-21",
    category: "Documentation",
    image: "/intelligence-artificielle-sante.png",
    content: (
      <>
        <p><em>Tests fonctions exécutives enfant • évaluation neuropsychologique • NEPSY-II • Figure de Rey • MABC</em></p>
        <p><strong>TL;DR.</strong> Combinez un questionnaire écologique (BRIEF-2), 1–2 épreuves standardisées centrées FE (p. ex. NEPSY-II Inhibition, Attention auditive & Ensemble de réponses) et une tâche visuo-construction/planification (Figure de Rey). Ajoutez MABC quand la composante motrice/coordination influence la performance. Interprétez toujours à la lumière des observations cliniques et du contexte scolaire/familial.</p>

        <h2>Pourquoi évaluer les fonctions exécutives ?</h2>
        <p>Les fonctions exécutives (FE) pilotent l’inhibition, la flexibilité, la planification et la mémoire de travail. Des fragilités se manifestent souvent par : lenteur, impulsivité, désorganisation, difficultés à commencer/terminer une tâche, erreurs d’inattention ou effondrement en double tâche.</p>
        <h3>À retenir</h3>
        <ul>
          <li><strong>Mesurer ≠ labelliser.</strong> Les scores objectivent un fonctionnement, ils n’“étiquettent” pas l’enfant.</li>
          <li><strong>Trianguler.</strong> Combinez test(s), questionnaires et observations en situation réelle.</li>
          <li><strong>Adapter.</strong> Choisissez vos outils selon l’âge, le langage, la motricité et les besoins de la demande.</li>
        </ul>

        <h2>Panorama rapide des outils utiles</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Outil</th>
                <th>Ce que ça renseigne principalement</th>
                <th>Quand l’utiliser</th>
                <th>Points d’attention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>NEPSY-II (sous-tests FE)</strong> – ex. Inhibition, Attention auditive & Ensemble de réponses, Classement d’animaux, Fluence de dessins</td>
                <td>Inhibition, flexibilité, alternance, attention soutenue, stratégie</td>
                <td>Évaluation FE « cœur » chez l’enfant d’âge scolaire</td>
                <td>Respecter consignes/temps ; interpréter le profil inter-sous-tests plutôt qu’un score isolé</td>
              </tr>
              <tr>
                <td><strong>Figure complexe de Rey</strong> (copie & mémoire)</td>
                <td>Planification, organisation visuo-spatiale, contrôle en cours d’action</td>
                <td>Quand l’enfant paraît « se jeter » sans plan, écrit/dessine désorganisé</td>
                <td>Décrire stratégie (global → détails vs détails dispersés) autant que le score</td>
              </tr>
              <tr>
                <td><strong>MABC-2</strong></td>
                <td>Coordination fine/globale, dextérité, équilibre</td>
                <td>Quand la motricité peut impacter les FE (double-tâche, contrôle moteur)</td>
                <td>Les contre-performances motrices peuvent « masquer » les FE</td>
              </tr>
              <tr>
                <td><strong>BRIEF-2</strong> (parents/enseignants)</td>
                <td>Impact écologique des FE au quotidien</td>
                <td>Complément systématique pour relier test ↔ vie réelle</td>
                <td>C’est déclaratif ; croiser avec l’observation</td>
              </tr>
              <tr>
                <td><strong>Autres utiles</strong> : D-KEFS (Stroop/Trail Making), Tour de Londres, WISC (mémoire de travail)</td>
                <td>Flexibilité, vitesse, planification, MDT</td>
                <td>Pour préciser un axe (p. ex. alternance vs inhibition pure)</td>
                <td>Attention aux effets langagiers/vitesse de traitement</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>⚠️ Les tests cités sont protégés. Utilisez des versions licenciées et reportez-vous aux manuels pour l’étalonnage/les barèmes.</em></p>

        <h2>Focus outils</h2>
        <h3>NEPSY-II : le « core » exécutif</h3>
        <ul>
          <li><strong>Sous-tests typiques FE</strong> : Inhibition, Inhibition – passage de consigne (flexibilité), Attention auditive & Ensemble de réponses (soutien attentionnel/alternance), Classement d’animaux (catégorisation et stratégie), Fluence de dessins (flexibilité non verbale).</li>
          <li><strong>Ce que j’observe en plus des scores</strong> : erreurs (omissions/commissions), vitesse vs précision, récupération après erreur, auto‑vérification, verbalisations spontanées.</li>
        </ul>
        <h3>Figure complexe de Rey : plan avant action</h3>
        <ul>
          <li><strong>Pourquoi</strong> : révèle la <strong>capacité à planifier et organiser</strong> l’espace et la séquence d’action (copie) et la <strong>qualité de l’encodage stratégique</strong> (rappel).</li>
          <li><strong>Regarder</strong> : ordre de reproduction (global→détails ?), segmentation des éléments, retours en arrière, persévérations, contrôles visuels.</li>
        </ul>
        <h3>MABC-2 : quand la motricité « tire » les FE</h3>
        <ul>
          <li><strong>Intérêt</strong> : beaucoup d’enfants « lâchent » l’inhibition/la planification dès que la charge motrice augmente.</li>
          <li><strong>À interpréter</strong> : vitesse vs précision, contrôle postural lors de tâches fines, erreurs sous double contrainte.</li>
        </ul>

        <h2>Construire une batterie courte selon la demande</h2>
        <h3>1) « Impulsivité, erreurs d’inattention, consignes difficiles »</h3>
        <ul>
          <li><strong>Noyau</strong> : NEPSY-II Inhibition + Attention auditive & Ensemble de réponses</li>
          <li><strong>Écologie</strong> : BRIEF-2 Parents + Enseignants</li>
          <li><strong>+</strong> Figure de Rey si désorganisation graphique/écrite</li>
        </ul>
        <h3>2) « Lenteur, désorganisation écriture/cahiers »</h3>
        <ul>
          <li><strong>Noyau</strong> : Figure de Rey (copie + rappel), NEPSY-II Classement d’animaux ou Fluence de dessins</li>
          <li><strong>Écologie</strong> : BRIEF-2</li>
          <li><strong>+</strong> WISC (MDT) si suspicion charge cognitive</li>
        </ul>
        <h3>3) « Maladresses, double tâche difficile »</h3>
        <ul>
          <li><strong>Noyau</strong> : MABC-2 (dextérité + équilibre), NEPSY-II Inhibition</li>
          <li><strong>Écologie</strong> : BRIEF-2</li>
          <li><strong>+</strong> Observation en tâche motrice avec consignes exécutives (parcours avec règles à inhiber/alterner)</li>
        </ul>
        <p><em>Durée cible</em> pour une première objectivation : 45–75 min de tests + 10–15 min d’observations qualitatives.</p>

        <h2>Lire les résultats sans se piéger</h2>
        <ul>
          <li><strong>Profil &gt; somme de scores</strong> : cherchez les <strong>dissociations</strong> (inhibition OK / alternance difficile ; vitesse OK / précision faible, etc.).</li>
          <li><strong>Facteurs confondants</strong> : langage, anxiété de performance, graphomotricité, vitesse de traitement, consignes non intégrées.</li>
          <li><strong>Relier au quotidien</strong> : relisez chaque point faible avec 1–2 exemples concrets (classe, maison) issus des questionnaires/entretiens.</li>
        </ul>

        <h2>Exemples de formulations (extrait de compte rendu)</h2>
        <ul>
          <li><em>« Les tâches d’inhibition sont réalisées avec précision mais au prix d’un ralentissement notable. En alternance de consignes, on observe des erreurs de persévération et une récupération lente après feedback. »</em></li>
          <li><em>« La copie de la Figure de Rey débute par des détails locaux dispersés, sans cadrage global. La relecture est rare, entraînant des omissions. »</em></li>
          <li><em>« En dextérité (MABC), les temps s’allongent lorsque la consigne ajoute une règle à retenir, suggérant une surcharge exécutive sous contrainte motrice. »</em></li>
        </ul>

        <h2>FAQ – Tests fonctions exécutives chez l’enfant</h2>
        <p><strong>À partir de quel âge tester les FE ?</strong><br/>Dès la maternelle, via l’observation structurée et certains sous-tests adaptés ; la batterie s’étoffe à l’école élémentaire.</p>
        <p><strong>La Figure de Rey évalue-t-elle les FE ?</strong><br/>Indirectement oui : elle renseigne la <strong>planification</strong>, l’<strong>organisation</strong> et le <strong>contrôle en cours d’action</strong>, dimensions clés des FE.</p>
        <p><strong>Pourquoi ajouter le MABC si je cible les FE ?</strong><br/>Parce que la <strong>coordination</strong> et le <strong>contrôle moteur</strong> modulent l’expression des FE : une faiblesse motrice peut mimer un trouble exécutif… ou l’amplifier.</p>
        <p><strong>Un « mauvais score » signifie-t-il un trouble exécutif ?</strong><br/>Non, c’est un <strong>indice</strong>. Il doit être interprété avec d’autres mesures, l’anamnèse et les observations écologiques (p. ex. BRIEF-2).</p>

        <h2>Conseils pratiques de passation</h2>
        <ul>
          <li>Standardisez la <strong>consigne</strong> et le <strong>timing</strong> ; notez toute adaptation.</li>
          <li>Consignez les <strong>erreurs qualitatives</strong> (persévérations, pertes de consigne, stratégies).</li>
          <li>Prévoyez <strong>pauses courtes</strong> pour éviter l’effet fatigue, surtout en alternance.</li>
          <li>Situez la performance avec des <strong>repères normatifs</strong> du manuel, jamais « à l’œil ».</li>
        </ul>

        <h2>Pour aller plus loin</h2>
        <ul>
          <li>Associer <strong>entraînement métacognitif</strong> simple (auto‑vérification, verbalisation de plan) aux rééducations graphomotrices et d’organisation scolaire.</li>
          <li>En restitution, traduisez chaque résultat en <strong>conseils concrets</strong> (outils visuels, routines, pas‑à‑pas, double codage, temps supplémentaire, règles simplifiées).</li>
        </ul>

        <h3>Mentions légales & éthique</h3>
        <p>Les noms de tests (NEPSY-II, MABC, BRIEF-2, etc.) sont des marques protégées. Utilisez des versions licenciées et reportez-vous aux manuels pour barèmes/étalonnages. Cet article est informatif et ne remplace pas un jugement clinique.</p>

        <h3>Petit CTA</h3>
        <blockquote>
          <strong>Gagnez du temps sur vos bilans.</strong> Avec Bilan Plume, structurez vos observations, centralisez vos scores et générez un premier jet révisable en quelques minutes — fidèle à votre pratique. <Link href="/essai-gratuit">Essayer gratuitement</Link>.
        </blockquote>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"À partir de quel âge tester les fonctions exécutives ?","acceptedAnswer":{"@type":"Answer","text":"Dès la maternelle, via l’observation structurée et certains sous-tests adaptés ; la batterie s’étoffe à l’école élémentaire."}},
    {"@type":"Question","name":"La Figure de Rey évalue-t-elle les fonctions exécutives ?","acceptedAnswer":{"@type":"Answer","text":"Indirectement oui : elle renseigne la planification, l’organisation et le contrôle en cours d’action, dimensions clés des FE."}},
    {"@type":"Question","name":"Pourquoi ajouter le MABC si je cible les fonctions exécutives ?","acceptedAnswer":{"@type":"Answer","text":"Parce que la coordination et le contrôle moteur modulent l’expression des FE : une faiblesse motrice peut mimer un trouble exécutif ou l’amplifier."}},
    {"@type":"Question","name":"Un mauvais score signifie-t-il un trouble exécutif ?","acceptedAnswer":{"@type":"Answer","text":"Non, c’est un indice. Il doit être interprété avec d’autres mesures, l’anamnèse et les observations écologiques (BRIEF-2)."}}
  ]
}`
          }}
        />
      </>
    ),
  },
  {
    slug: "bilan-psychomoteur-etapes-tests-rendu-professionnel",
    title: "Bilan psychomoteur : étapes, tests et méthodes pour un rendu professionnel",
    excerpt:
      "Guide complet du bilan psychomoteur : observation, tests, cotations, interprétation, et modèle de rapport. Conseils concrets pour un compte rendu clair et utile.",
    author: "Bilan Plume",
    date: "2025-08-20",
    category: "Documentation",
    image: "/medical-report-writing.png",
    content: (
      <>
        <blockquote>
          Guide complet, clair et actionnable pour structurer vos évaluations, gagner du temps et produire un rapport lisible par les familles et les prescripteurs.
        </blockquote>

        <h2>Objectifs du bilan psychomoteur</h2>
        <ul>
          <li><strong>Analyser le fonctionnement psychomoteur</strong> de la personne (enfant, ado, adulte) dans ses dimensions motrices, perceptives, cognitives et émotionnelles.</li>
          <li><strong>Formuler des hypothèses cliniques</strong> et <strong>déterminer des axes de prise en charge</strong> ou d’orientation.</li>
          <li><strong>Restituer un compte rendu compréhensible</strong>, fidèle à la clinique et utile pour le suivi.</li>
        </ul>
        <p><em>⚠️ Rappel déontologique : respect du secret professionnel, du consentement éclairé (représentants légaux pour mineurs), et des droits d’usage des outils standardisés.</em></p>

        <h2>Quand proposer un bilan ? (motifs fréquents)</h2>
        <ul>
          <li>Difficultés <strong>graphomotrices</strong> : lenteur, douleur, illisibilité, fatigue.</li>
          <li>Fragilités de <strong>motricité globale</strong> : coordination, équilibre, planification du geste.</li>
          <li>Suspicion de <strong>troubles praxiques/dyspraxie</strong> ou de <strong>dysgraphie</strong>.</li>
          <li><strong>Attention/FE</strong> : distractibilité, impulsivité, rigidité.</li>
          <li><strong>Perceptions visuo-spatiales</strong> : repérage, copie, construction.</li>
          <li><strong>Tonus/posture/régulation</strong> : fatigabilité, variabilité tonique, intégration sensorielle.</li>
        </ul>
        <p><em>Mots-clés SEO associés : bilan psychomoteur enfant, dyspraxie bilan, test graphomotricité, compte rendu psychomoteur, normes percentile psychomotricité.</em></p>

        <h2>Déroulé type d’un bilan (7 étapes)</h2>
        <ol>
          <li><strong>Demande et consentement</strong> — Prescription/indication, consentement (écrit), objectifs.</li>
          <li><strong>Anamnèse structurée</strong> — Grossesse/NA, développement, antécédents médicaux et scolaires, environnement, intérêts.</li>
          <li><strong>Observation clinique</strong> (spontanée et guidée) — Posture, tonus, régulation, latéralité, disponibilité attentionnelle, relation à la tâche.</li>
          <li><strong>Épreuves standardisées</strong> (selon le motif et votre matériel autorisé) — Choisir peu d’outils mais <strong>pertinents</strong> et <strong>étalonnés</strong> pour l’âge.</li>
          <li><strong>Situations écologiques</strong> — Écriture, découpages, habillages, jeux moteurs, routines.</li>
          <li><strong>Analyse intégrée</strong> — Confronter observations, scores, et contexte. Hypothèses + axes d’intervention.</li>
          <li><strong>Restitution & rapport</strong> — Restitution orale adaptée + <strong>compte rendu écrit</strong> structuré et clair.</li>
        </ol>

        <h2>Observation clinique : grille rapide</h2>
        <ul>
          <li><strong>Tonus/posture</strong> : régulation tonique, endurance, ajustements posturaux.</li>
          <li><strong>Motricité globale</strong> : équilibres statique/dynamique, coordinations, sauts, lancers.</li>
          <li><strong>Motricité fine</strong> : dextérité, dissociation doigts/poignet, préhension, manipulation.</li>
          <li><strong>Praxies</strong> : idéatoire, idéomotrice, constructives (organisation du geste, séquençage).</li>
          <li><strong>Perception</strong> : visuelle (forme, espace), tactile/proprioceptive, intégration sensorielle.</li>
          <li><strong>Attention/FE</strong> : inhibition, flexibilité, planification, double tâche.</li>
          <li><strong>Graphomotricité</strong> : tenue, posture, alignement, pression, rythme, lisibilité.</li>
          <li><strong>Comportement/émotionnel</strong> : tolérance à l’erreur, motivation, stratégies.</li>
        </ul>
        <p><em>Astuce : notez des exemples concrets (verbatims, temps, nombre d’essais) — appui probant dans le rapport.</em></p>

        <h2>Tests et outils : choisir sans surcharger</h2>
        <p><em>Vous devez disposer des droits d’utilisation et manuels correspondants. N’incluez pas d’énoncés d’épreuves protégées dans le rapport.</em></p>
        <p><strong>Par domaines (exemples, à adapter)</strong></p>
        <ul>
          <li><strong>Motricité globale & coordination</strong> : outils normés de coordination, équilibre, sauts; parcours moteurs chronométrés.</li>
          <li><strong>Motricité fine/dextérité</strong> : planches de dextérité, empilements, sériations fines, vitesse gestuelle.</li>
          <li><strong>Praxies/constructives</strong> : copie de figures géométriques, assemblages, encastrements; analyse des stratégies.</li>
          <li><strong>Perception visuo-spatiale</strong> : tâches de discrimination/repérage, copie dirigée, puzzles.</li>
          <li><strong>Attention/FE</strong> : tâches d’inhibition/alternance, repérage visuel, mémoire de travail.</li>
          <li><strong>Graphomotricité</strong> : vitesse de copie, qualité (alignement, régularité, pression), posture/tenue.</li>
        </ul>
        <p><strong>Critères de sélection</strong></p>
        <ul>
          <li>Adéquation au <strong>motif</strong> et à l’<strong>âge</strong>.</li>
          <li><strong>Étalonnage</strong> récent et interprétation claire (notes standard, percentiles).</li>
          <li>Durée raisonnable pour éviter la fatigue et préserver la <strong>validité</strong>.</li>
        </ul>

        <h2>Coter et interpréter sans se tromper</h2>
        <ul>
          <li><strong>Notes étalonnées / standard scores</strong> : centrées sur la moyenne d’âge.</li>
          <li><strong>Rang percentile</strong> : position par rapport à la population (ex. P10 = mieux que 10 % des pairs).</li>
          <li><strong>Intervalle de confiance</strong> : mentionnez-le quand disponible.</li>
          <li><strong>Concordances/dissociations</strong> : croiser les sources (observations ↔ tests ↔ contexte).</li>
          <li><strong>Formulation</strong> : décrire les faits, éviter les étiquettes non fondées; relier aux impacts fonctionnels.</li>
        </ul>
        <p><em>Exemple</em> : « Les performances en coordinations bilatérales se situent <strong>au percentile 9</strong> (IC 90 %). En situation de copie prolongée, on observe une <strong>fatigabilité</strong> et une <strong>augmentation de la pression</strong> sur l’outil. »</p>

        <h2>Structure recommandée du compte rendu</h2>
        <ol>
          <li><strong>Contexte & demande</strong></li>
          <li><strong>Méthodologie</strong> (outils, conditions de passation, durées)</li>
          <li><strong>Anamnèse synthétique</strong></li>
          <li><strong>Observations cliniques</strong> (avec exemples)</li>
          <li><strong>Résultats</strong> (tableau clair + brève interprétation)</li>
          <li><strong>Analyse intégrée</strong> (hypothèses cliniques)</li>
          <li><strong>Conclusions</strong> (points d’appui / fragilités)</li>
          <li><strong>Recommandations</strong> (aménagements, axes de prise en charge, orientations)</li>
          <li><strong>Suivi & échéances</strong> (réévaluation, objectifs)</li>
          <li><strong>Annexes</strong> (définitions, consentements, tableau des scores)</li>
        </ol>
        <p><strong>Bonnes pratiques de rédaction</strong></p>
        <ul>
          <li>Viser <strong>clarté et neutralité</strong> (phrases courtes, vocabulaire partagé école/famille/soins).</li>
          <li><strong>Éviter le jargon</strong> non expliqué (glossaire si besoin).</li>
          <li><strong>Illustrer par des exemples</strong> concrets observés.</li>
          <li><strong>Différencier faits / interprétations / hypothèses</strong>.</li>
          <li>Respecter <strong>RGPD</strong> : données minimales, durée de conservation, droits d’accès.</li>
        </ul>

        <h2>Modèle de tableau de résultats (à adapter)</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Domaine</th>
                <th>Outil/épreuve</th>
                <th>Indicateur</th>
                <th>Score</th>
                <th>Norme/Percentile</th>
                <th>Observation clé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Motricité globale</td>
                <td>Coordination bilatérale</td>
                <td>Vitesse / erreurs</td>
                <td>23</td>
                <td>P9</td>
                <td>Stratégie hésitante, besoin de guidage</td>
              </tr>
              <tr>
                <td>Graphomotricité</td>
                <td>Copie de texte</td>
                <td>Vitesse (lpm)</td>
                <td>65</td>
                <td>P16</td>
                <td>Douleur main, pression forte</td>
              </tr>
              <tr>
                <td>Attention</td>
                <td>Inhibition</td>
                <td>Temps / erreurs</td>
                <td>42</td>
                <td>P25</td>
                <td>Impulsivité ↘ avec repères visuels</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><em>Astuce : ajoutez une ligne « Synthèse en une phrase » en bas du tableau.</em></p>

        <h2>Recommandations fréquentes (exemples)</h2>
        <ul>
          <li><strong>En classe</strong> : lignes de base visuelles, temps majoré, supports agrandis, guidage verbal court, pause toutes 10–15 min.</li>
          <li><strong>À la maison</strong> : tâches motrices ludiques courtes, routines stables, entraînements à la planification.</li>
          <li><strong>En séance</strong> : travail ciblé (coordinations, praxies, graphomotricité), transfert vers tâches scolaires.</li>
        </ul>
        <p><em>Toujours individualiser et préciser la fréquence / la durée et les indicateurs de suivi.</em></p>

        <h2>Erreurs courantes à éviter</h2>
        <ul>
          <li>Multiplier les tests sans lien direct avec la demande.</li>
          <li>Rapports trop longs, peu lisibles, sans synthèse ni recommandations actionnables.</li>
          <li>Conclure sur un « trouble » sans convergence suffisante des indices.</li>
          <li>Oublier le <strong>contexte environnemental</strong> (classe, famille, loisirs).</li>
        </ul>

        <h2>Mini‑checklists prêtes à l’emploi</h2>
        <h3>Avant la passation</h3>
        <ul>
          <li>[ ] Consentement + documents partagés</li>
          <li>[ ] Hypothèses/motif clarifiés</li>
          <li>[ ] Sélection d’outils pertinents (durée totale ≤ 90 min si possible)</li>
          <li>[ ] Matériel prêt + feuilles de cotation</li>
        </ul>
        <h3>Pendant</h3>
        <ul>
          <li>[ ] Tracer <strong>exemples concrets</strong></li>
          <li>[ ] Noter conditions (bruit, fatigue, médication)</li>
          <li>[ ] Prévoir pauses</li>
        </ul>
        <h3>Après</h3>
        <ul>
          <li>[ ] Cotations vérifiées (IC, percentiles)</li>
          <li>[ ] Synthèse en 3 points (appuis, fragilités, impacts)</li>
          <li>[ ] Recommandations SMART (qui fait quoi, où, quand)</li>
        </ul>

        <h2>FAQ (SEO)</h2>
        <p><strong>Combien de temps dure un bilan psychomoteur ?</strong> 1 à 3 séances selon l’âge, le motif et les outils utilisés.</p>
        <p><strong>Quels tests sont utilisés ?</strong> Une combinaison d’outils <strong>étalonnés</strong> (selon l’âge) et de situations écologiques. Le choix dépend de la <strong>demande</strong> et du <strong>matériel</strong> autorisé du praticien.</p>
        <p><strong>Que signifie “percentile” ou “note étalonnée” ?</strong> Des repères statistiques situant la performance par rapport aux pairs d’âge.</p>
        <p><strong>Le bilan suffit-il à poser un diagnostic ?</strong> Il <strong>éclaire</strong> la clinique psychomotrice. Le diagnostic (lorsqu’il est requis) relève d’une <strong>approche pluridisciplinaire</strong>.</p>

        <h2>Conseils de style pour un rendu professionnel</h2>
        <ul>
          <li><strong>Page de garde</strong> claire (identité, date, motif, destinataires).</li>
          <li><strong>Sommaire</strong> + titres H2/H3, tableaux aérés, marges régulières.</li>
          <li>Encadrés <strong>« À retenir »</strong> et <strong>« Recommandations »</strong>.</li>
          <li><strong>Annexes</strong> distinctes pour scores détaillés.</li>
          <li>Fichier PDF <strong>protégé</strong> (mot de passe si nécessaire) + version editable gardée au cabinet.</li>
        </ul>

        <h2>Modèle de plan de rapport (copier‑coller)</h2>
        <pre>
          <code>{`1. Contexte & demande
2. Méthodologie (outils, conditions, durée)
3. Anamnèse synthétique
4. Observations cliniques
5. Résultats (tableaux + interprétation concise)
6. Analyse intégrée
7. Conclusions
8. Recommandations (classe, maison, rééducation)
9. Proposition de suivi
10. Annexes (scores, consentements)`}
          </code>
        </pre>

        <h2>Pour aller plus loin</h2>
        <ul>
          <li>Travail <strong>pluridisciplinaire</strong> (enseignants, orthophonistes, ergothérapeutes, neuropédiatres…)</li>
          <li><strong>Réévaluation</strong> à 6–12 mois quand nécessaire.</li>
          <li>Formation continue sur les <strong>outils étalonnés</strong> et la <strong>rédaction de rapports</strong>.</li>
        </ul>

        <h3>🪶 Avec Bilan Plume</h3>
        <ul>
          <li>Générez un <strong>premier jet</strong> de compte rendu à partir de vos notes et trames.</li>
          <li>Intégrez <strong>tableaux de scores</strong> et <strong>recommandations types</strong> personnalisables.</li>
          <li>Export <strong>PDF propre</strong> + historique des versions.</li>
        </ul>

        
        <p><strong>Licence & IP des tests</strong> : respectez scrupuleusement les manuels et les droits d’éditeur; ne reproduisez pas les items, images ou barèmes dans vos supports publics.</p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Combien de temps dure un bilan psychomoteur ?","acceptedAnswer":{"@type":"Answer","text":"Généralement 1 à 3 séances selon l’âge, le motif et les outils utilisés."}},
    {"@type":"Question","name":"Quels tests sont utilisés ?","acceptedAnswer":{"@type":"Answer","text":"Des outils étalonnés adaptés à l’âge et au motif, complétés par des situations écologiques d’évaluation."}},
    {"@type":"Question","name":"Que signifie percentile ou note étalonnée ?","acceptedAnswer":{"@type":"Answer","text":"Des repères statistiques situant la performance par rapport aux pairs d’âge, exprimés en percentiles ou notes standard."}},
    {"@type":"Question","name":"Le bilan suffit-il à poser un diagnostic ?","acceptedAnswer":{"@type":"Answer","text":"Le bilan psychomoteur éclaire la clinique; le diagnostic relève d’une approche pluridisciplinaire lorsque nécessaire."}}
  ]
}`
          }}
        />
      </>
    ),
  },
  {
    slug: "methode-simple-claire",
    title: "Méthode simple pour des bilans psychomoteurs précis et rapides",
    excerpt:
      "Découvrez une méthode claire et pratique pour rédiger vos bilans psychomoteurs plus rapidement tout en maintenant une qualité clinique irréprochable.",
    author: "Bilan Plume",
    date: "2025-08-13",
    category: "Pratique Clinique",
    image: "/psychomotricite-therapie.png",
    content: (
      <>
        <p className="lead">
          Rédiger un bilan clair, utile et rapide n'est pas qu'une question de style : c'est surtout une organisation de l'information.
          Voici une méthode courte, pragmatique et sans jargon pour gagner du temps sans perdre la finesse clinique.
        </p>

        <h2>1) Préparer avant la consultation</h2>
        <ul>
          <li><strong>Trame standardisée = base</strong> : définissez un plan fixe (sections + sous-sections) que vous réutilisez.</li>
          <li><strong>Objectif du bilan</strong> : notez en une phrase ce que vous cherchez à trancher (hypothèse / question posée).</li>
          <li><strong>Parcimonie des données</strong> : ne collectez que l’utile à l’objectif (principe de minimisation des données).</li>
        </ul>

        <h2>2) Capturer l’essentiel pendant l’évaluation</h2>
        <ul>
          <li><strong>Grille d’observation</strong> courte (puces, codes rapides) pour les items récurrents.</li>
          <li><strong>Temps forts</strong> : notez immédiatement les comportements significatifs (début/fin, contexte, réaction).</li>
          <li><strong>Tests</strong> : consignez protocole utilisé et résultats bruts/standardisés — sans recopier le manuel.</li>
        </ul>

        <h2>3) Structurer le compte rendu sans vous répéter</h2>
        <p>Plan recommandé :</p>
        <ol>
          <li>Motif & question posée</li>
          <li>Anamnèse (très synthétique)</li>
          <li>Observations cliniques</li>
          <li>Résultats aux épreuves (tableau bref si besoin)</li>
          <li>Analyse intégrative (mettre en lien, pas juxtaposer)</li>
          <li>Conclusion répondant à la question de départ</li>
          <li>Pistes d’accompagnement / aménagements</li>
        </ol>
        <p><strong>Règle d’or</strong> : chaque phrase doit soit <em>décrire</em>, soit <em>expliquer</em>, soit <em>conclure</em>. Évitez les doublons.</p>

        <h2>4) Quantifier… sans noyer le lecteur</h2>
        <ul>
          <li><strong>Tableaux compacts</strong> : une ligne = épreuve, colonnes = score pertinent + court commentaire.</li>
          <li><strong>Mise en relief</strong> : mettez en gras uniquement les résultats impactant la conclusion.</li>
          <li><strong>Traçabilité</strong> : indiquez la version du protocole si elle influence l’interprétation.</li>
        </ul>

        <h2>5) Rédiger plus vite tout en gardant votre « voix »</h2>
        <ul>
          <li>Utilisez des <strong>premiers jets à partir de trames</strong>, puis ajustez avec vos observations.</li>
          <li>Conservez des <strong>blocs réutilisables</strong> : anamnèse type, formules de conclusion, recommandations.</li>
          <li><strong>Langage clair</strong> : phrases courtes, un point clé par paragraphe, jargon expliqué.</li>
        </ul>

        <h2>6) Contrôles finaux (2 minutes)</h2>
        <ul>
          <li>Le bilan répond-il explicitement à la question initiale ?</li>
          <li>Y a-t-il cohérence entre observations, scores et conclusion ?</li>
          <li>Orthographe et ponctuation vérifiées (lecture à voix haute de la conclusion).</li>
          <li>Partage responsable : uniquement aux personnes concernées, stockage sécurisé.</li>
        </ul>

        <h3>Mini-modèle de conclusion</h3>
        <blockquote>
          Les éléments cliniques et les résultats aux épreuves suggèrent [force/limite principale].
          Cela impacte [école/vie quotidienne] surtout dans [situations].
          Nous recommandons [2–3 actions concrètes], à réévaluer dans [délai].
        </blockquote>

        <p>
          Envie d’accélérer tout en gardant votre clinique aux commandes ?
          Testez vos trames, tableaux automatiques et premiers jets assistés sur <strong>Bilan Plume</strong>.
          <Link href="/essai-gratuit">Essayer gratuitement</Link>.
        </p>

        <p className="text-sm text-gray-500">
          Note : adaptez toujours le contenu aux référentiels et pratiques de votre lieu d’exercice.
          Cet article propose une méthode d’organisation, pas un protocole de diagnostic.
        </p>
      </>
    ),
  }
]

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

type PageProps = { params: { slug: string } }

function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  const url = `https://www.bilanplume.fr/blog/${article.slug}`

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      url,
      title: `${article.title} | Bilan Plume` as string,
      description: article.excerpt,
      images: [
        {
          url: `https://www.bilanplume.fr${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) return notFound()

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.bilanplume.fr/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.bilanplume.fr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.bilanplume.fr/blog/${article.slug}`,
      },
    ],
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.date,
    image: `https://www.bilanplume.fr${article.image}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.bilanplume.fr/blog/${article.slug}`,
    },
  }

  return (
    <SiteLayout>
      <article className="max-w-3xl mx-auto px-4 py-12">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:underline">
              Accueil
            </Link>{" "}
            /{" "}
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>{" "}
            / <span className="text-gray-700">{article.title}</span>
          </nav>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className="text-gray-600 mb-6">Par {article.author} • {new Date(article.date).toLocaleDateString("fr-FR")}</p>

          <div className="relative aspect-video w-full mb-8 overflow-hidden rounded-xl border border-gray-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content ? (
              <>{article.content}</>
            ) : (
              <>
                <p>{article.excerpt}</p>
                <p>
                  Ceci est un exemple d'article. Ajoutez ici votre contenu riche: sections, listes, visuels, et liens internes
                  vers d'autres ressources du site.
                </p>
              </>
            )}
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      </article>
    </SiteLayout>
  )
}
