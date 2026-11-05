
        const realDetails = {
            number: "4532  8910  5678  1234",
            cvv: "892",
            maskedCvv: "•••"
        };

        let isRevealed = false;
        let isFrozen = false;
        let currentLimit = 5000;
        let currentSpent = 2500;

        // Toggle Details
        function toggleCardDetails() {
            if (isFrozen) {
                showToast("Unfreeze card first to view sensitive details.");
                return;
            }

            isRevealed = !isRevealed;
            const numEl = document.getElementById('cardNumber');
            const cvvEl = document.getElementById('cardCvv');
            const iconEl = document.getElementById('toggleIcon');
            const textEl = document.getElementById('toggleText');

            if (isRevealed) {
                numEl.innerText = realDetails.number;
                cvvEl.innerText = realDetails.cvv;
                iconEl.className = "fa-regular fa-eye-slash text-amber-300";
                textEl.innerText = "Hide Details";
            } else {
                numEl.innerHTML = "<span>••••</span><span>••••</span><span>••••</span><span>1234</span>";
                cvvEl.innerText = realDetails.maskedCvv;
                iconEl.className = "fa-regular fa-eye text-amber-300";
                textEl.innerText = "Show Details";
            }
        }

        // Toggle Freeze State
        function toggleFreezeCard() {
            isFrozen = !isFrozen;
            const container = document.getElementById('cardContainer');
            const freezeBtnText = document.getElementById('freezeBtnText');
            const freezeIcon = document.getElementById('freezeIcon');
            const freezeIconContainer = document.getElementById('freezeIconContainer');

            if (isFrozen) {
                container.classList.add('is-frozen');
                freezeBtnText.innerText = "Unfreeze";
                freezeIcon.className = "fa-solid fa-lock text-sm";
                freezeIconContainer.style.backgroundColor = "rgba(225, 29, 72, 0.15)";
                freezeIconContainer.style.color = "#e11d48";
                
                if (isRevealed) toggleCardDetails();
                
                showToast("Virtual card frozen successfully.");
            } else {
                container.classList.remove('is-frozen');
                freezeBtnText.innerText = "Freeze";
                freezeIcon.className = "fa-regular fa-snowflake text-sm";
                freezeIconContainer.style.backgroundColor = "rgba(165, 56, 96, 0.1)";
                freezeIconContainer.style.color = "var(--secondary)";
                
                showToast("Virtual card unfrozen.");
            }
        }

        // Copy Card Number to Clipboard
        function copyCardDetails() {
            if (isFrozen) {
                showToast("Cannot copy details while card is frozen.");
                return;
            }

            const rawCardNumber = "4532891056781234";
            const el = document.createElement('textarea');
            el.value = rawCardNumber;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            showToast("Card number copied to clipboard!");
        }

        // Spending Limit Modal Controls
        function openLimitModal() {
            document.getElementById('limitModal').classList.remove('hidden');
        }

        function closeLimitModal() {
            document.getElementById('limitModal').classList.add('hidden');
        }

        function saveLimit() {
            const inputVal = parseInt(document.getElementById('limitInput').value, 10);
            if (!isNaN(inputVal) && inputVal > 0) {
                currentLimit = inputVal;
                updateLimitUI();
                closeLimitModal();
                showToast(`Monthly limit set to $${currentLimit.toLocaleString()}`);
            }
        }

        function updateLimitUI() {
            const pct = Math.min(100, Math.round((currentSpent / currentLimit) * 100));
            document.getElementById('limitDisplay').innerText = `$${currentSpent.toLocaleString()} / $${currentLimit.toLocaleString()}`;
            document.getElementById('limitProgressBar').style.width = `${pct}%`;
        }

        // Toast Handler
        let toastTimeout;
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toastMsg');
            
            toastMsg.innerText = message;
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // Interactive 3D Card Tilt Effect
        const cardContainer = document.getElementById('cardContainer');
        const virtualCard = document.getElementById('virtualCard');

        cardContainer.addEventListener('mousemove', (e) => {
            const rect = cardContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (centerY - y) / 12;
            const rotateY = (x - centerX) / 12;

            virtualCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        cardContainer.addEventListener('mouseleave', () => {
            virtualCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
 