import React, { useEffect, useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import Link from 'next/link'
import Alert from "@material-tailwind/react/Alert";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";


function ConnectMatamask(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [siteName, setSiteName] = React.useState('');
    /*const [Test, setTest] = React.useState('');
    useEffect(() => {
        function update() {
            props.TestValue(Test);
        }
        update();
    },[]);*/
    return (
        <>
            <Button
                color="green"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                {props.text}
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <br></br>
                <ModalHeader toggler={() => setShowModal(false)}>
                    Connect to Matamask
                </ModalHeader>
                <ModalBody>
                <p className="text-base leading-relaxed text-gray-600 font-normal">
                        I always felt like I could do anything. That’s the main thing people
                        are controlled by! Thoughts- their perception of themselves! They're
                        slowed down by their perception of themselves. If you're taught you
                        can’t do anything, you won’t do anything. I was taught I could do
                        everything.
                    </p>
                </ModalBody>
                <ModalFooter>
                <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="light"
                    >
                        Save Changes
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ConnectMatamask;