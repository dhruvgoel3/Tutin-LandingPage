/**
 * TUTIN Landing Page — Interactive Controller
 * Features:
 * - Dynamic Header Scroll & Mobile Drawer
 * - Hero App Mockup Toggle (Teacher vs Student View)
 * - Dual Persona Tabs (Tutors vs Students)
 * - Interactive Feature Tour Tabs
 * - Live Hyperlocal Tutor Filter & Search
 * - Interactive Fee & Revenue Calculator
 * - Testimonial Category Filters
 * - FAQ Accordion
 * - Modal Dialogs (Download, Tutor Registration, Profile Cards)
 * - Toast Notification System
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Toast Notification Helper ──────────────────────────────────────────
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, type = 'success', icon = 'fa-circle-check') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto dismiss after 3.5s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ── 2. Sticky Header & Scroll Spy ────────────────────────────────────────
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ── 3. Mobile Navigation Drawer ──────────────────────────────────────────
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── 4. Hero App Mockup Preview Switcher (Teacher vs Student) ─────────────
  const previewModeBtns = document.querySelectorAll('.preview-mode-btn');
  const teacherMockup = document.getElementById('teacherMockup');
  const studentMockup = document.getElementById('studentMockup');

  previewModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      previewModeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.mockup;
      if (mode === 'teacher') {
        teacherMockup.classList.remove('hidden');
        studentMockup.classList.add('hidden');
      } else {
        teacherMockup.classList.add('hidden');
        studentMockup.classList.remove('hidden');
      }
    });
  });

  // Mock Notification actions inside Hero
  const acceptBtn = document.querySelector('.notif-btn.accept');
  const declineBtn = document.querySelector('.notif-btn.decline');
  const notifCard = document.querySelector('.app-notification-card');

  if (acceptBtn && notifCard) {
    acceptBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifCard.innerHTML = `<div style="text-align:center; padding: 6px; color:#059669; font-weight:700; font-size:11px;">
        <i class="fa-solid fa-circle-check"></i> Rohan Verma admitted to Batch!
      </div>`;
      showToast('Join Request Accepted: Rohan Verma added to Batch!', 'success', 'fa-user-check');
    });
  }
  if (declineBtn && notifCard) {
    declineBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifCard.style.display = 'none';
      showToast('Join request declined.', 'info', 'fa-circle-info');
    });
  }

  // ── 5. Dual Persona Switcher (For Tutors vs For Students) ─────────────────
  const btnForTutors = document.getElementById('btnForTutors');
  const btnForStudents = document.getElementById('btnForStudents');
  const tutorsBlock = document.getElementById('tutorsBlock');
  const studentsBlock = document.getElementById('studentsBlock');

  function setPersona(persona) {
    if (persona === 'tutors') {
      btnForTutors.classList.add('active');
      btnForStudents.classList.remove('active');
      tutorsBlock.classList.remove('hidden');
      studentsBlock.classList.add('hidden');
    } else {
      btnForStudents.classList.add('active');
      btnForTutors.classList.remove('active');
      studentsBlock.classList.remove('hidden');
      tutorsBlock.classList.add('hidden');
    }
  }

  if (btnForTutors && btnForStudents) {
    btnForTutors.addEventListener('click', () => setPersona('tutors'));
    btnForStudents.addEventListener('click', () => setPersona('students'));
  }

  // Demo Share Card button
  const demoShareCardBtn = document.getElementById('demoShareCardBtn');
  if (demoShareCardBtn) {
    demoShareCardBtn.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('https://tutin.app/teacher/sunita-rao');
        showToast('Profile link copied: tutin.app/teacher/sunita-rao', 'success', 'fa-copy');
      } else {
        showToast('Profile card link: https://tutin.app/teacher/sunita-rao', 'success', 'fa-share-nodes');
      }
    });
  }

  // ── 6. Interactive App Tour Tabs ──────────────────────────────────────────
  const tourTabs = document.querySelectorAll('.tour-tab-btn');
  const tourPanels = document.querySelectorAll('.tour-panel');

  tourTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tourTabs.forEach(t => t.classList.remove('active'));
      tourPanels.forEach(p => p.classList.add('hidden'));

      tab.classList.add('active');
      const targetId = tab.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
      }
    });
  });

  // Demo actions inside Tour panels
  const demoMarkFeePaid = document.getElementById('demoMarkFeePaid');
  if (demoMarkFeePaid) {
    demoMarkFeePaid.addEventListener('click', () => {
      demoMarkFeePaid.className = 'fee-pill paid';
      demoMarkFeePaid.innerHTML = '<i class="fa-solid fa-check"></i> Paid (Just now)';
      showToast('Kavya Patel marked as Paid! Digital receipt generated & sent.', 'success', 'fa-file-invoice');
    });
  }

  const imwAddBatchDemo = document.getElementById('imwAddBatchDemo');
  if (imwAddBatchDemo) {
    imwAddBatchDemo.addEventListener('click', () => {
      showToast('Batch Creation Wizard: Enter batch subject, days, fee & capacity in 10 seconds.', 'info', 'fa-users');
    });
  }

  // ── 7. Hyperlocal Tutor Search & Directory ────────────────────────────────
  const tutorsDataset = [
    {
      id: 'arvind-sharma',
      name: 'Dr. Arvind Sharma, Ph.D',
      subject: 'Physics',
      classes: 'Class 11, Class 12',
      board: 'CBSE',
      city: 'Delhi',
      area: 'Model Town, North Delhi',
      exp: '15 Yrs Exp',
      rating: 4.9,
      reviewsCount: 68,
      avatar: 'assets/avatars/avatar_1.png',
      batchTitle: 'Target CBSE Boards & JEE Physics',
      batchTiming: 'Mon, Wed, Fri • 5:00 PM',
      fee: 2800,
      bio: 'Ex-FIITJEE senior faculty with over 15 years mentoring board toppers. Personalized numerical problem-solving sessions and weekly DPPs.'
    },
    {
      id: 'sunita-rao',
      name: 'Sunita Rao, M.Sc, B.Ed',
      subject: 'Mathematics',
      classes: 'Class 10, Class 12',
      board: 'CBSE',
      city: 'Bangalore',
      area: 'Indiranagar & Koramangala',
      exp: '9 Yrs Exp',
      rating: 4.9,
      reviewsCount: 42,
      avatar: 'assets/avatars/avatar_5.png',
      batchTitle: 'Pure Calculus & Algebra Mastery',
      batchTiming: 'Tue, Thu, Sat • 4:30 PM',
      fee: 2500,
      bio: 'Gold medalist mathematician. Specializes in transforming math anxiety into 95+ board percentages through structured conceptual clarity.'
    },
    {
      id: 'meenakshi-verma',
      name: 'Dr. Meenakshi Verma',
      subject: 'Biology',
      classes: 'Class 11, Class 12',
      board: 'CBSE',
      city: 'Chandigarh',
      area: 'Sector 34 & 35',
      exp: '11 Yrs Exp',
      rating: 4.8,
      reviewsCount: 35,
      avatar: 'assets/avatars/avatar_3.png',
      batchTitle: 'NEET 2026 Biology Crash & Boards',
      batchTiming: 'Daily • 6:00 PM',
      fee: 3000,
      bio: 'Authored 2 pre-medical biology guides. In-depth NCERT line-by-line coverage with 3D diagrammatic animations.'
    },
    {
      id: 'vikas-malhotra',
      name: 'Vikas Malhotra, CA (Inter)',
      subject: 'Commerce',
      classes: 'Class 11, Class 12',
      board: 'CBSE',
      city: 'Jaipur',
      area: 'Vaishali Nagar & C-Scheme',
      exp: '8 Yrs Exp',
      rating: 4.9,
      reviewsCount: 54,
      avatar: 'assets/avatars/avatar_7.png',
      batchTitle: 'Class 12 Accountancy & Business Studies',
      batchTiming: 'Mon, Wed, Fri • 4:00 PM',
      fee: 2200,
      bio: 'Simplifying balance sheets and financial statements with practical case studies and mock board exams.'
    },
    {
      id: 'ananya-sen',
      name: 'Ananya Sen, M.Sc Chemistry',
      subject: 'Chemistry',
      classes: 'Class 10, Class 11, Class 12',
      board: 'ICSE',
      city: 'Mumbai',
      area: 'Andheri West & Juhu',
      exp: '7 Yrs Exp',
      rating: 4.8,
      reviewsCount: 29,
      avatar: 'assets/avatars/avatar_6.png',
      batchTitle: 'Organic & Inorganic Chemistry Simplified',
      batchTiming: 'Tue, Thu, Sat • 5:30 PM',
      fee: 3200,
      bio: 'Former ICSE board examiner. Visual reaction mechanisms and mnemonic techniques for periodic tables and chemical equations.'
    },
    {
      id: 'rohit-deshmukh',
      name: 'Prof. Rohit Deshmukh',
      subject: 'Mathematics',
      classes: 'Class 9, Class 10',
      board: 'State Board',
      city: 'Pune',
      area: 'Kothrud & Shivaji Nagar',
      exp: '13 Yrs Exp',
      rating: 4.9,
      reviewsCount: 61,
      avatar: 'assets/avatars/avatar_8.png',
      batchTitle: 'Class 10 Board Sprint & Geometry Lab',
      batchTiming: 'Mon to Fri • 6:30 PM',
      fee: 1800,
      bio: 'Known across Pune for board exam question paper predictions and rigorous 100-mark mock test series.'
    },
    {
      id: 'priya-kapoor',
      name: 'Priya Kapoor, M.A. English',
      subject: 'English',
      classes: 'Class 9, Class 10, Class 11, Class 12',
      board: 'ICSE',
      city: 'Lucknow',
      area: 'Gomti Nagar & Hazratganj',
      exp: '10 Yrs Exp',
      rating: 4.9,
      reviewsCount: 39,
      avatar: 'assets/avatars/avatar_4.png',
      batchTitle: 'English Literature & Grammar Excellence',
      batchTiming: 'Tue, Thu, Sat • 4:00 PM',
      fee: 1600,
      bio: 'Specialist in ICSE Shakespeare literature analysis, essay drafting, and formal grammar with 100% distinction track record.'
    }
  ];

  const tutorsResultGrid = document.getElementById('tutorsResultGrid');
  const citySelect = document.getElementById('citySelect');
  const boardSelect = document.getElementById('boardSelect');
  const classSelect = document.getElementById('classSelect');
  const subjectSelect = document.getElementById('subjectSelect');
  const applyFilterBtn = document.getElementById('applyFilterBtn');

  function renderTutors(list) {
    if (!tutorsResultGrid) return;
    tutorsResultGrid.innerHTML = '';

    if (list.length === 0) {
      tutorsResultGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 48px; background: #F8FAFC; border-radius: 16px; border: 1px dashed #CBD5E1;">
          <i class="fa-solid fa-user-xmark fa-2x" style="color: #94A3B8; margin-bottom: 12px;"></i>
          <h4 style="font-size: 18px; font-weight: 700; color: #1E293B;">No matching tutors found</h4>
          <p style="font-size: 14px; color: #64748B; margin-top: 4px;">Try selecting "All Cities" or "All Subjects" to see more verified educators.</p>
        </div>
      `;
      return;
    }

    list.forEach(tutor => {
      const card = document.createElement('div');
      card.className = 'tutor-card';
      card.innerHTML = `
        <div class="tc-top">
          <img src="${tutor.avatar}" alt="${tutor.name}" class="tc-tutor-avatar">
          <div class="tc-tutor-info">
            <h4>${tutor.name}</h4>
            <span class="tc-tutor-spec">${tutor.subject} • ${tutor.exp}</span>
            <div class="tc-tutor-loc"><i class="fa-solid fa-location-dot"></i> ${tutor.area}, ${tutor.city}</div>
          </div>
        </div>

        <div class="tc-tags-row">
          <span class="tc-tag"><i class="fa-solid fa-star" style="color:#F59E0B;"></i> ${tutor.rating} (${tutor.reviewsCount})</span>
          <span class="tc-tag">${tutor.board}</span>
          <span class="tc-tag">${tutor.classes}</span>
        </div>

        <div class="tc-batch-highlight">
          <strong>${tutor.batchTitle}</strong>
          <span><i class="fa-regular fa-clock"></i> ${tutor.batchTiming}</span>
        </div>

        <div class="tc-footer-row">
          <div class="tc-fee">₹${tutor.fee.toLocaleString('en-IN')} <span>/ month</span></div>
          <button class="btn btn-sm btn-primary view-profile-btn" data-id="${tutor.id}">
            <i class="fa-solid fa-id-card"></i> View Profile
          </button>
        </div>
      `;
      tutorsResultGrid.appendChild(card);
    });

    // Attach profile modal listeners
    document.querySelectorAll('.view-profile-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.id;
        const tutor = tutorsDataset.find(t => t.id === id);
        if (tutor) openProfileModal(tutor);
      });
    });
  }

  function applyFilters() {
    const selectedCity = citySelect ? citySelect.value : 'all';
    const selectedBoard = boardSelect ? boardSelect.value : 'all';
    const selectedClass = classSelect ? classSelect.value : 'all';
    const selectedSubject = subjectSelect ? subjectSelect.value : 'all';

    const filtered = tutorsDataset.filter(t => {
      const matchCity = selectedCity === 'all' || t.city === selectedCity;
      const matchBoard = selectedBoard === 'all' || t.board.toLowerCase().includes(selectedBoard.toLowerCase());
      const matchClass = selectedClass === 'all' || t.classes.includes(selectedClass);
      const matchSubject = selectedSubject === 'all' || t.subject.toLowerCase() === selectedSubject.toLowerCase();
      return matchCity && matchBoard && matchClass && matchSubject;
    });

    renderTutors(filtered);
    showToast(`Found ${filtered.length} verified educator${filtered.length === 1 ? '' : 's'} matching your criteria.`, 'info', 'fa-magnifying-glass');
  }

  if (applyFilterBtn) {
    applyFilterBtn.addEventListener('click', applyFilters);
  }

  // Initial render
  renderTutors(tutorsDataset);

  // ── 8. Interactive Fee & Revenue Calculator ────────────────────────────────
  const sliderStudents = document.getElementById('sliderStudents');
  const sliderFee = document.getElementById('sliderFee');
  const valStudents = document.getElementById('valStudents');
  const valFee = document.getElementById('valFee');
  const resRevenue = document.getElementById('resRevenue');
  const resRecovered = document.getElementById('resRecovered');
  const resHoursSaved = document.getElementById('resHoursSaved');

  function updateCalculator() {
    if (!sliderStudents || !sliderFee) return;

    const count = parseInt(sliderStudents.value, 10);
    const fee = parseInt(sliderFee.value, 10);

    valStudents.textContent = `${count} Students`;
    valFee.textContent = `₹${fee.toLocaleString('en-IN')} / mo`;

    const monthlyRevenue = count * fee;
    const unpaidDuesRecovered = Math.round(monthlyRevenue * 0.15); // Avg 15% lost/delayed recovery
    const hoursSaved = Math.round((count * 0.3) + 4); // ~18 hours typical

    resRevenue.textContent = `₹${monthlyRevenue.toLocaleString('en-IN')}`;
    resRecovered.textContent = `+₹${unpaidDuesRecovered.toLocaleString('en-IN')} / mo`;
    resHoursSaved.textContent = `${hoursSaved} Hours`;
  }

  if (sliderStudents && sliderFee) {
    sliderStudents.addEventListener('input', updateCalculator);
    sliderFee.addEventListener('input', updateCalculator);
    updateCalculator(); // initial run
  }

  const calcCtaBtn = document.getElementById('calcCtaBtn');
  if (calcCtaBtn) {
    calcCtaBtn.addEventListener('click', () => {
      openModal(downloadModal);
    });
  }

  // ── 9. Testimonial Category Filters ───────────────────────────────────────
  const tfBtns = document.querySelectorAll('.tf-btn');
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  tfBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tfBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      testimonialCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── 10. FAQ Accordion ─────────────────────────────────────────────────────
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── 11. Modal Management ──────────────────────────────────────────────────
  const downloadModal = document.getElementById('downloadModal');
  const teacherModal = document.getElementById('teacherModal');
  const profileCardModal = document.getElementById('profileCardModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close buttons
  const closeDownloadModal = document.getElementById('closeDownloadModal');
  const closeTeacherModal = document.getElementById('closeTeacherModal');
  const closeProfileModal = document.getElementById('closeProfileModal');

  if (closeDownloadModal) closeDownloadModal.addEventListener('click', () => closeModal(downloadModal));
  if (closeTeacherModal) closeTeacherModal.addEventListener('click', () => closeModal(teacherModal));
  if (closeProfileModal) closeProfileModal.addEventListener('click', () => closeModal(profileCardModal));

  // Triggers for download modal
  const openDownloadModalBtn = document.getElementById('openDownloadModalBtn');
  const heroDownloadBtn = document.getElementById('heroDownloadBtn');
  const mobileDownloadBtn = document.getElementById('mobileDownloadBtn');
  const bannerDownloadBtn = document.getElementById('bannerDownloadBtn');
  const bannerIosBtn = document.getElementById('bannerIosBtn');

  [openDownloadModalBtn, heroDownloadBtn, mobileDownloadBtn, bannerDownloadBtn, bannerIosBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', () => openModal(downloadModal));
  });

  // Triggers for teacher registration modal
  const openTeacherModalBtn = document.getElementById('openTeacherModalBtn');
  const ctaTeacherJoin = document.getElementById('ctaTeacherJoin');
  const tutorListYourselfBtn = document.getElementById('tutorListYourselfBtn');
  const footerTeacherJoinLink = document.getElementById('footerTeacherJoinLink');

  [openTeacherModalBtn, ctaTeacherJoin, tutorListYourselfBtn, footerTeacherJoinLink].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(teacherModal);
      });
    }
  });

  // Close modal on click outside dialog
  [downloadModal, teacherModal, profileCardModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  // Close modal on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(downloadModal);
      closeModal(teacherModal);
      closeModal(profileCardModal);
    }
  });

  // Dynamic Profile Card Modal
  const profileModalDynamicContent = document.getElementById('profileModalDynamicContent');

  function openProfileModal(tutor) {
    if (!profileModalDynamicContent) return;

    profileModalDynamicContent.innerHTML = `
      <div class="digital-card-preview" style="box-shadow: none; border: none;">
        <div class="dcp-cover">
          <span class="dcp-tag"><i class="fa-solid fa-certificate"></i> Verified Tutin Educator</span>
        </div>
        <div class="dcp-body">
          <img src="${tutor.avatar}" alt="${tutor.name}" class="dcp-avatar">
          <h4 class="dcp-name">${tutor.name}</h4>
          <p class="dcp-title">${tutor.subject} Specialist • ${tutor.exp}</p>
          <p style="font-size: 13px; color: #475569; margin-bottom: 12px; line-height: 1.5;">${tutor.bio}</p>
          
          <div class="dcp-badges">
            <span>${tutor.board}</span>
            <span>${tutor.classes}</span>
            <span>${tutor.city}</span>
          </div>

          <div class="dcp-metrics">
            <div><strong>${tutor.rating} ★</strong><span>(${tutor.reviewsCount} Reviews)</span></div>
            <div><strong>₹${tutor.fee.toLocaleString('en-IN')}</strong><span>Per Month</span></div>
            <div><strong>4 Batches</strong><span>Active Now</span></div>
          </div>

          <div style="background: #F8FAFC; border-radius: 12px; padding: 12px; margin-bottom: 16px; text-align: left; font-size: 12px;">
            <div style="font-weight: 700; color: #1E1B4B; margin-bottom: 4px;"><i class="fa-solid fa-calendar-check text-primary"></i> ${tutor.batchTitle}</div>
            <div style="color: #64748B;"><i class="fa-solid fa-location-dot"></i> ${tutor.area}, ${tutor.city} • <i class="fa-regular fa-clock"></i> ${tutor.batchTiming}</div>
          </div>

          <div class="dcp-actions">
            <button class="btn btn-primary" style="flex:1;" onclick="alert('Opening WhatsApp chat with ${tutor.name}...');">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </button>
            <button class="btn btn-outline" style="flex:1;" onclick="alert('Join Request Sent to ${tutor.name}!');">
              <i class="fa-solid fa-user-plus"></i> Request Admission
            </button>
          </div>
        </div>
      </div>
    `;

    openModal(profileCardModal);
  }

});
