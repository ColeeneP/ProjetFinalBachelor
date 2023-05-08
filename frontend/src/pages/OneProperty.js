import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { DeleteProperty, GetProperty } from "../services/Property";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddHomeIcon from '@mui/icons-material/AddHome';
import Header from "../components/Header";
import { GetInventoriesForProperty } from "../services/Inventory";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function OneProperty() {
    let {id} = useParams();
    const [property, setProperty] = useState([{"id":1,"address":"","additional":null,"postalCode":86370,"city":"","rent":480.0,"charges":20.0,"deposit":500.0,"available":true}]);
    const [inventories, setInventories] = useState([{"id":1,"property":{"id":1,"address":"1181 chemin du plan","additional":"BAT C APP 004","postalCode":86370,"city":"VIVONNE","rent":480.0,"charges":20.0,"deposit":500.0,"available":true},"status":"ingoing","date":"2023-03-22","notes":"Logement neuf, RAS"}]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        GetProperty(id).then(res => {setProperty(res.data);}).catch(error => error);
        GetInventoriesForProperty(id).then(res => {setInventories(res.data);}).catch(error => error);
    }, [])

    let navigate = useNavigate(); 
    const editRoute= () =>{ 
      let path = 'modifyProperty/'; 
      navigate(path);
    }
    const inventoryRoute= () =>{ 
        let path = 'createInventory/'; 
        navigate(path);
      }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    
    const deleteConfirmation = () => {
        DeleteProperty(id).then(res => {navigate(`/home`); alert("Bien supprimé")}).catch(error => error);   
    };

    return (
        <div>
            <Header />
            <div class="main_oneproperty">
            <img class="property_img" src="https://as2.ftcdn.net/v2/jpg/04/39/24/79/1000_F_439247968_J5nC39sqagXLVBTRGXlt2HZgaf3LDriM.jpg" />
            <div class="main_section">
            <div class="property_info">{property.address}<br />{property.additional}<br />{property.postalCode} {property.city}<br /><br />
            {property.rent}€ HC + {property.charges}€ charges + caution {property.deposit}€ 
            </div>
            <div class="property_inventory">
                <h2>Etat des lieux</h2>
            {inventories.map((inventory) => {
                return(
                    <div class="detail_inventory">{inventory.status} {inventory.date} :<br />{inventory.notes}</div>   
                )
            })}
            </div>
            </div>
            </div>

            <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16, color:'#CEB992' }}
                    icon={<SpeedDialIcon />}
                >
                    <SpeedDialAction icon={<AddHomeIcon />} name={'Inventory'} onClick={inventoryRoute} />
                    <SpeedDialAction icon={<EditIcon />} name={'Edit'} onClick={editRoute} />
                    <SpeedDialAction icon={<DeleteIcon />} name={'Delete'} onClick={handleClickOpen} />
                </SpeedDial>
            </Box>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Veuillez confirmer la suppression"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Cette action est irréversible
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Annuler</Button>
                <Button onClick={deleteConfirmation} autoFocus>
                    Confirmer
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

}