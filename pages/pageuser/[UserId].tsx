import { CandidateData } from '@/data';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { ProfileUser } from '@/components/ProfileUser';
import { EvaluateUser } from '@/components/EvaluateUser';

export interface InterfaceProps {}

export default function Interface() {
    const Router = useRouter();
    return (
        <div>
            <section className="px-4 max-w-6xl mx-auto">
                <ProfileUser Route={Router} />
                <EvaluateUser/>
            </section>
        </div>
    );
}
