import WebSocket from 'ws';
import chalk from 'chalk';

interface walletList {
    [key: string]: string;
}

const walletsList: walletList = {
    "CPDJZzVqhMXtoquqPYLkV683FjDzVn8Hpa2sE6STPuz1": "Profit",
    "4ovLAWnbexHn1HFiKmSdWubPXg2rSJ2sUx46pCNxcTbs": "LarpVonTrier",
    "41QD483G38GiowtXuz7npLM7bPi15wVjikwVGouYvmCf": "Scatt",
    "6sdb5o3XWM27RSjcYqoVZ88ruuPzHTfqFQEq26nN6eVq": "Yogurt",
    "4zzMh4cxKLx5ecRjDJbn5BeAr8aMQvgu25w4duUyCFe1": "Trippy",
    "BeBZMAJVQs4VMR3sx2GT4nPDYq5hRSrm18iexH6EGFvc": "Sartoshi",
    "FUbnme4UJ3x6aZ5nGPymTWoDghE9p3XJx1BfLzSpGefM": "ShockedJS",
    "5Qk5aEW3KUNSSr15Dvn3raEixcSXPoJsBUTo5tPtr1eh": "Andy",
    "Dgak1jbnCBSyVbHdW5y3BmpHwnfxQ2avUtL9XxXvzqC8": "Franklin",
    "FC3nyVqdufVfrgXiRJEqgST1JdJSEBEz6a9KoBfFP7c4": "Michi Dev",
    "E1CntJUye6uca3LVCX1YHKU31RG83NcUV2xeiRrzgVZw": "Lilo Dev",
    "2YqgUGrE2TCUBmkgAC3yj6G4m77e2p7gofPzGi8u85bj": "Candle Dev",
    "6BUw7DcLA1m5szoEELhDV4brVt7xCV2uBXcvY81xzzgM": "Mimany Dev",
    "EVDV9jkJx3E7U2vfsZkKdYjKv7TFBZGUv7ekZQdjnJCe": "Runes Dev",
    "CbhJzggrRj2txuRUPB5EWvefGmjxz3AUgF3M8LmH4ff1": "Yelo",
    "EM1K8QuPHnJNGLvoiFB5PpBePj2j6pUY64LFv3uEgFGJ": "Yelo2",
    "C66VbBEW5BbAzCPZSxTL2xwgn6Vq6rjHGqx3LD57r9Fo": "Zaxy",
    "DMEPFE7tLQPMCuj4GSdqbPKviXdWvsJkQ4BM2GTyrx5W": "Frostyjays PumpFun",
    "HtucFepgUkMpHdrYsxMqjBNN6qVBdjmFaLZneNXopuJm": "Frostyjays",
    "HrCPnDvDgbpbFxKxer6Pw3qEcfAQQNNjb6aJNFWgTEng": "0xWinged",
    "H6LJKeQrwwUu2izYJZ36zDSMwRTbQQ5ti62acqwGZ5DV": "What In Tarnation Dev",
    "9JRuyRU2wbe9CVHobQ54Yvcaxjzsy3wtpd89snn63a2D": "Jeo Rogen Dev",
    "FL4j8EEMAPUjrvASnqX7VdpWZJji1LFsAxwojhpueUYt": "Norman Dev",
    "3itbpYy3S1u4hKyYNyseYx2RoA87gpeYBNgRoAXuB4rc": "THOG Dev",
    "DZagH4zAkaP9ddceUCqnSe2NCPxvpKcUgWQjWDqwYR4Z": "Hunter Boden Dev",
    "GW8NRhff8KyHvM5XxMeyYNbmHGymDsRAVuLtk2ouTLne": "Epik Duck Dev",
    "Ab3J3zoKMXFz5yLjn54gUB3dvYmzg3MCun1AjoL8aiXw": "Secrot Dev",
    "4r2Je99kYqEjctCCuzYifJFTX9iMaE2Cj7Vo3Dnjw2Ch": "Wolf of Solana Dev",
    "62bMZZuQPEEe56GzjtYVRgxHQgYD9SMsnL83ZrxHpKcJ": "Joeing Dev",
    "6VZosy9mHD3Eo925pyx2i8Mww4oWqnySd1gkatGjGTsG": "Wife Jak Dev",
    "EmZAYjHHsuqbJYXxtDagpVZtMtsuiqxVkTEgAZnoETqF": "LSP Dev",
    "HmBmSYwYEgEZuBUYuDs9xofyqBAkw4ywugB1d7R7sTGh": "Tobi",
    "BgcaTtLQdt8cPtU5hCzkC7wP68ZMrhLmtZddfR5fjoKM": "Orangie",
    "F6UsnRGajrwABgxJiQ1UmMExXwcHiw2yw1fRNXNhdi3E": "Tobi 2",
    "ASSw3FMwV99rh4CvxLAucTVHX8f4LQ2pmi2JjDA337sN": "Trippy",
    "5qT8X6Jic7XPu9torSZ6ruJCefGcRP45YuPdxhEymR9p": "Nicolai",
    "Dm9PxJET2mmgzJLqCc2vn7uYUf7qVghJfibwcaG3QpnK": "Griffin",
    "5L8tvgwP6DN6mSKHxzZFLgZa3bAjNjs3z3mCnb1RaZ5T": "Davis",
    "D7ZxXpif4JywE3tX2PK8XguzBRgAhYy1uEDLZaNDMon9": "Slippage",
    "7qCX9ccdNjNhig3hUGsE4XE19eQs2Yp8wtJcoHNEx5gc": "Door",
    "8yecjHYBAuDtbLrgooHpMWHQDnAVRjtCFFreKXiq4xrd": "Zaxy",
    "8wEHuonhkxb7GQkLxB8dNXGm8yruVCEseNcVwF7MpRuY": "Cotal/Youssef",
    "3cG7d6GmX47HKSX5nWRX9MJpruCojbzUkak92gSXGtG5": "Rekt 1k to 100k",
    "4DdrfiDHpmx55i4SPssxVzS9ZaKLb8qr45NKY9Er9nNh": "MrFrog 3",
    "83DSGygwUscJnSmz2M5KxDaqNjXdMAnfFwJhW22bo2ed": "Musky Dev/Griffin Hidden",
    "5LYejE9KEHA8TbRoE2AByisnM2rSX7YpijmEpxd1vhNA": "Elon Dev",
    "8r5yqobY9zFjzwMZwD99gkox44R9anLjTb9H4pqErECh": "Zaxy",
    "63Wt3wo9bURNRS1vUkWfWTCspCihev9agfvd4xt834sG": "Zaxy",
    "7KbDtAdWnF8ZxDtSq59TCHnosQSe8Ggz1k5cbcXKhDss": "Beanie Maxi",
    "6XzqtNmZyhTGFyTCpHZ3FgLSeEbUYd3oAX2YynnxQDZ9": "Yelo Photon",
    "8hLDQ5ziM1jCiG5Xu5bgMeiBhQAThwXrnArZgmu7zYBW": "Yogurt Banana",
    "5PsTN3ncH8MQCxdwu9r9xXYJ6yDjyNUSXNaic3LaKPLK": "Door",
    "BUVkukd8cKcZGXkYYRXPqNSa5JokR1TkN9cjyVLfR4Dv": "Arkadeum",
    "7Kgtgvsqs7C8USm9y7j2LfGKnr2pLtb8XtEk5wdRs91W": "letto / Mihabibi dev",
    "GE7or7fWLNpUyeaeJ8WEWoongzYEy4825Yxbbmr2EQAB": "Orangie Plonk",
    "H271U9hB11CPYdkePsdKp5Yk3TkJDZjaV9eWhpemFZzm": "Jays Plonk/Aiden GC insider",
    "Grq7fvrhRwcgXrJgGV85onUUaNagzC7kALgVC2EmcDQm": "Griffin Photon",
    "7H45Svk7NhhW7hA93wApQticwiyhrg2DbFgw2UfUJWbU": "Yelo Hidden",
    "4EPNLZHUnEbpxZm6qTPkXpMG2EDektbjUA1yAugHJLc4": "Pump Fun Owner",
    "C4BWYccLsbeHgZzVupFZJGvJK2nQpn8em9WtzURH4gZW": "Obijai",
    "BZ9iR8mAspDYaN7DaNewehhrvwAwU2ZRyPqvNkQbNTBn": "Obijai 2",
    "GCQQmE8tjfkFzcP7zKhpLhCGaeCL3RY2GJeTS6XJDnWq": "0xWinged 1-100 SOL",
    "B7jvXubCRCQfjV3mUweYVPq4MFWjfDPJ6JBiGW2x1Xut": "Yogurt Bridged",
    "2JN3NLV9w7PyPGWqbhti5HEkBHktnzyink3zBcDpZcLE": "Davis",
    "4kU7b54WHVoStfL5sJaWrRt6Tzcv6aU1VFf8wLb2E1Vv": "Davis",
    "9rhvbmyQC2JB3gbbEQV5jEiBjy4uQc9K6q4dxxTTNpJb": "Yelo Botting",
    "3oeGn5GP6rY9KhHYKndG53BEXiMFs8kqd1CaGDQdLNJr": "CatGPT Dev",
    "6bbrPkVVUkk17XVkVkDQgY87aj5wr4zinZnyDv9zNkN9": "Cotali",
    "grATDoCCQtzJSjjdUro7EXNgXwsHCzs2zNXVhamTWUP": "MrBaceFook (Cotali)",
    "566MpDavwmyh8b4bFzK8Jq3fRmFvg6v7soE2HNnLAdhL": "Resolvent",
    "DEHDQ3ANMcGANWFcybHND8S2Wp8u15S6PCAEbQvJWxDf": "Potentially Devin",
    "3ESYpN6WpEdN5syU5ohucpfEC8txmoF8VFpeJwRdnVHm": "JS 2",
    "FtPVqgoeatUKeSxAb5ipc8vfc46ueWf43nnuo5ghjkH2": "degendan",
    "GixGuF191uNmPRwUbkZM2mxk63VvHe7E3WNz1opoh5Nd": "Zazu Dev",
    "6XFB3vYZ6pEoSGnznyPAQ79sgsdprBVmfhbT3aDJRXxn": "Thumbs/Test Dev",
    "3tCrMtBSpd4PV22bkifYJXM4A9p3fecu4dkUqeTVvCEv": "Potentially Aiden",
    "3jwm89eeCMQVcXfqa4ag3PDTmZhQMS9rf1u9T4NXupsK": "Obijai 2",
    "CCLxD9n9Gc3KQZ9tgd2RaQG4R8Hyhb8szUvkqbKf1e7F": "Ryse 100 SOL",
    "DjdcEVqKSrbQbme2GcqniFucEfuGa6EnCSsTqXSkTLiP": "Radcat Dev",
    "FkdZzUrDUWRcCbPs7FeCVx9Rmt1UsPrcmicits7ZrRNy": "MilfBath Dev",
    "7bVTSbdkaDJb882HSQkWTnc7RWYnEEeK4P3w5D35rBCo": "Zee",
    "CjiWxhjyTRZ8PKWdQjAeeDyQJ8fUKVWMLW9MsnWoJFz4": "Potentially Yelo 2",
};

let reconnectAttempts = 0;
const maxReconnectAttempts = 5;
let restartTimer: string | number | NodeJS.Timeout | undefined;

function sendRequest(ws: WebSocket, pubkeys: string[]) {
    // Generate a unique ID for the request
    const id = Math.floor(Math.random() * 1000000);

    const request = {
        jsonrpc: "2.0",
        id: id,
        method: "transactionSubscribe",
        params: [
            {
                vote: false,
                accountInclude: pubkeys,
                failed: false,
            },
            {
                commitment: "processed",
                encoding: "jsonParsed",
                transactionDetails: "full",
                showRewards: false,
                maxSupportedTransactionVersion: 0
            }
        ]
    };

    ws.send(JSON.stringify(request));
}

function setupWebSocket() {
    const ws = new WebSocket(`wss://atlas-mainnet.helius-rpc.com?api-key=8d4d870e-69ed-4675-9e1b-c5e02b1ef9e6`);

    // Define WebSocket event handlers
    ws.on('open', () => {
        console.log('[WalletTracker] WebSocket connection opened.');
        reconnectAttempts = 0; // Reset reconnect attempts on successful connection

        const pubKeys = Object.keys(walletsList);
        console.log(`[WalletTracker] Subscribing to ${pubKeys.length} wallets...`);
        sendRequest(ws, pubKeys);
    });

    ws.on('message', async function incoming(data: { toString: () => string; }) {
        try {
            const transaction = JSON.parse(data.toString()).params?.result.transaction;
            if (!transaction) return;

            const signerPublicKey = transaction.transaction.message.accountKeys.find((accountKey: { signer: boolean; }) => accountKey.signer === true).pubkey;

            if (!walletsList[signerPublicKey]) return; // Exit if wallet label is unknown

            const JUPITER_PROGRAM_ID = 'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4';
            const RAYDIUM_PROGRAM_ID = '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8';
            const PUMP_PROGRAM_ID = '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P';
            const RAYDIUM_ROUTE_ID = 'routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS';
            const ORCA_PROGRAM_ID = 'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc';

            const isSwap = transaction.transaction.message.instructions.some(
                (instruction: { programId: string; }) =>
                    instruction.programId === JUPITER_PROGRAM_ID || instruction.programId === RAYDIUM_PROGRAM_ID || instruction.programId === PUMP_PROGRAM_ID || instruction.programId === RAYDIUM_ROUTE_ID || instruction.programId === ORCA_PROGRAM_ID
            );

            if (!isSwap) return; // Exit if no swap detected
            // Filter out swap instructions based on known Program IDs
            const swapInstructions = transaction.transaction.message.instructions.filter(
                (instruction: { programId: string; }) =>
                    instruction.programId === JUPITER_PROGRAM_ID || instruction.programId === RAYDIUM_PROGRAM_ID || instruction.programId === PUMP_PROGRAM_ID || instruction.programId === RAYDIUM_ROUTE_ID || instruction.programId === ORCA_PROGRAM_ID
            );

            if (swapInstructions.length === 0) return; // Exit if no swap instructions found

            // Logic to parse the transaction and extract swap details
            // Assuming getTokenData function fetches token details including its symbol from its mint address
            const preBalances = transaction.meta.preTokenBalances?.filter((balance: { owner: any; }) => balance.owner === transaction.transaction.message.accountKeys.find((key: { signer: any; }) => key.signer).pubkey);
            const postBalances = transaction.meta.postTokenBalances?.filter((balance: { owner: any; }) => balance.owner === transaction.transaction.message.accountKeys.find((key: { signer: any; }) => key.signer).pubkey);
            const solanaPreBalance = transaction.meta.preBalances[0];
            const solanaPostBalance = transaction.meta.postBalances[0];
            const solanaChange = Math.abs((solanaPostBalance - solanaPreBalance) / 10 ** 9);

            // Compare pre and post balances to determine the tokens swapped
            // This is a simplified approach, real-world scenarios might require more complex logic
            const tokenChanges = await Promise.all(preBalances.map(async (preBalance: { mint: string; uiTokenAmount: { uiAmount: number; }; }) => {
                const postBalance = postBalances.find((post: { mint: string; }) => post.mint === preBalance.mint);
                if (!postBalance) return null; // Skip if no matching post balance found
                const change = postBalance.uiTokenAmount.uiAmount - preBalance.uiTokenAmount.uiAmount;
                if (change === 0) return null; // Skip if no change in balance

                return {
                    change: change,
                    address: preBalance.mint,
                };
            }));

            let token1 = tokenChanges.find(change => change.change < 0); // Attempt to find a sold token first
            if (!token1) {
                // Attempt to find any token with change in postBalances not present in preBalances (newly acquired tokens)
                const newTokenMint = postBalances.find((postBalance: { mint: any; }) => !preBalances.some((preBalance: { mint: any; }) => preBalance.mint === postBalance.mint));
                if (newTokenMint) {
                    token1 = {
                        change: newTokenMint.uiTokenAmount.uiAmount, // Entire postBalance amount as it's newly acquired
                        address: newTokenMint.mint,
                    };
                }
            } else {
                // If token1 is found, attempt to find the second token (bought token)
                const token2 = tokenChanges.find(change => change.change > 0);
                if (token2) {
                    // If token2 is found, set token1 as the bought token and token2 as the sold token
                    token1 = token2;
                }
            }

            const swapPlatforms: Record<string, string> = {
                'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4': 'Jupiter',
                '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8': 'Raydium',
                'routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS': 'Raydium',
                'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc': 'Raydium', // Actually Orca but for simplicity...
                '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P': 'Pump'
            };

            // Determine the swap platform as before
            const swapPlatform: string = swapPlatforms[swapInstructions[0].programId] || 'Unknown';

            if (token1) { // Check if token1 is defined
                if (token1.change < 0) {
                    console.log(chalk.red(`Sold ${Math.abs(token1.change)} ${token1.symbol} for ${solanaChange} SOL on ${swapPlatform} by ${walletsList[signerPublicKey]}`));
                } else {
                    console.log(chalk.green(`Bought ${solanaChange} SOL for ${Math.abs(token1.change)} ${token1.symbol} on ${swapPlatform} by ${walletsList[signerPublicKey]}`));
                }
            } else {
                console.log(chalk.blue(`Unknown Swap: ${tokenChanges[0].change} ${tokenChanges[0].symbol} for ${solanaChange} SOL on ${swapPlatform} by ${walletsList[signerPublicKey]}`));
            }
        } catch (error) {
            console.error('[WalletTracker] Error processing transaction:', error);
        }
        clearTimeout(restartTimer);
        restartTimer = setTimeout(() => {
            console.log('[WalletTracker] Restarting WebSocket connection...');
            ws.close(); // Close the current connection
        }, 3600000); // 1 hour
    });

    ws.on('close', () => {
        console.log('[WalletTracker] WebSocket connection closed. Reconnecting...');
        if (reconnectAttempts < maxReconnectAttempts) {
            setTimeout(setupWebSocket, 1000 * reconnectAttempts); // Exponential backoff could be applied here
            reconnectAttempts++;
        }
    });

    ws.on('error', (err) => {
        console.error('[WalletTracker] WebSocket error:', err);
        ws.close(); // Ensure closing the connection on error
    });

    // Keep the connection alive
    setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.ping();
        }
    }, 30000); // Ping every 30 seconds
}

// Initial setup
setupWebSocket();