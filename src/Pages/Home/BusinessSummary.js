import React from 'react';

const BusinessSummary = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold uppercase">Millions Business Trust Us</h1>
                    <p class="py-6 uppercase">Try to understand users expectation</p>

                    <div class="stats stats-vertical lg:stats-horizontal shadow">

                        <div class="stat">
                            <div class="stat-title">Complete Projects </div>
                            <div class="stat-value">31K</div>

                        </div>

                        <div class="stat">
                            <div class="stat-title">Happy Clients</div>
                            <div class="stat-value">4,200</div>
                            <div class="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div class="stat">
                            <div class="stat-title">Feedbacks</div>
                            <div class="stat-value">1,200</div>
                            <div class="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>

                    <button class="btn btn-primary mt-5">Request For Quote </button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;