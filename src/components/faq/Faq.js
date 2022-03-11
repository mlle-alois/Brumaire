import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Faq.css';

export default function Faq() {
    return (
        <div>
            <h1>FAQ</h1>
            <div className="faq-body">
                <div className="section">
                    <h2>Questions fréquentes</h2>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography>Où puis-je essayer votre scooter ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Vous pouvez <b>réserver un essai</b> sur notre site internet. Un Ambassadeur se
                                déplacera dans
                                un de
                                nos points de rencontre à Paris pour que vous puissiez tester le scooter Brumaire.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography>Quels sont vos délais de livraison ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nos délais de livraison varient d'une semaine à deux mois. Ils dépendent de votre
                                adresse de
                                livraison et du moment où vous passez la commande de votre scooter Brumaire.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                            <Typography>Combien coûte votre scooter ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Notre scooter est en vente à partir de 3190€ TTC (entre 1690 € et 2590€ après
                                subventions). Pour
                                plus d'informations, rendez-vous <b>ici</b> !
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography>Où réparer mon brumaire ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Brumaire Service dispose d'un réseau dense de garages en Île-de-France. Une question sur
                                votre
                                scooter ? Contactez l'<b><a href={"https://www.brumaire.co/contact"}
                                                            target={"_blank"}>Assistance</a></b> et nous vous répondons
                                dans les
                                24h.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="section">
                    <h2>Problèmes rencontrés</h2>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Mon scooter ne démarre plus, que faire ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Vérifiez que vous tentez de le démarrer correctement, [INSERER SOLUTION]
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Mon scooter n'a pas l'air de charger</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Vérifiez que le scooter est correctement branché, [INSERER SOLUTION]
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
