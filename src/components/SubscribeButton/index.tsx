import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

export function SubscribeButton() {
    const {data: session} = useSession()

    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }

        try {

            const response = await api.post('/subscribe')
            const { sessionId } = response.data;
            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({sessionId})

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <button 
            className={styles.SubscribeButoon}
            onClick={() => handleSubscribe()}
            >Subscribe now
        </button>
    )
}