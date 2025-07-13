import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  User,
  MessageSquare,
  Type,
} from "lucide-react";
import useStore from "../store/useStore";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    contactForm,
    updateContactForm,
    resetContactForm,
    isFormSubmitting,
    setFormSubmitting,
  } = useStore();

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!contactForm.name.trim()) {
      newErrors.name = "Name is required";
    } else if (contactForm.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!contactForm.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!contactForm.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (contactForm.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!contactForm.message.trim()) {
      newErrors.message = "Message is required";
    } else if (contactForm.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setStatus("loading");
    setFormSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          subject: contactForm.subject.trim(),
          message: contactForm.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        resetContactForm();
        toast.success(data.message || "Message sent successfully!");
      } else {
        setStatus("error");
        toast.error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      toast.error("Network error. Please try again.");
    } finally {
      setFormSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleInputChange = (field, value) => {
    updateContactForm(field, value);

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const IconComponent = ({ icon: Icon, error }) => (
    <div
      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors ${
        error
          ? "text-red-500"
          : "text-gray-400 group-focus-within:text-blue-500"
      }`}
    >
      <Icon className="w-5 h-5" />
    </div>
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Name Field */}
      <motion.div variants={inputVariants} className="group">
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Full Name *
        </label>
        <div className="relative">
          <IconComponent icon={User} error={errors.name} />
          <motion.input
            type="text"
            id="name"
            value={contactForm.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 ${
              errors.name
                ? "border-red-500 focus:ring-red-500/20"
                : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
            }`}
            placeholder="Enter your full name"
            whileFocus={{ scale: 1.01 }}
            disabled={isFormSubmitting}
          />
        </div>
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-500 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email Field */}
      <motion.div variants={inputVariants} className="group">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Email Address *
        </label>
        <div className="relative">
          <IconComponent icon={Mail} error={errors.email} />
          <motion.input
            type="email"
            id="email"
            value={contactForm.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 ${
              errors.email
                ? "border-red-500 focus:ring-red-500/20"
                : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
            }`}
            placeholder="your.email@example.com"
            whileFocus={{ scale: 1.01 }}
            disabled={isFormSubmitting}
          />
        </div>
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-500 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Subject Field */}
      <motion.div variants={inputVariants} className="group">
        <label
          htmlFor="subject"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Subject *
        </label>
        <div className="relative">
          <IconComponent icon={Type} error={errors.subject} />
          <motion.input
            type="text"
            id="subject"
            value={contactForm.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 ${
              errors.subject
                ? "border-red-500 focus:ring-red-500/20"
                : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
            }`}
            placeholder="What would you like to discuss?"
            whileFocus={{ scale: 1.01 }}
            disabled={isFormSubmitting}
          />
        </div>
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-1 text-sm text-red-500 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.subject}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message Field */}
      <motion.div variants={inputVariants} className="group">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
        >
          Message *
        </label>
        <div className="relative">
          <div
            className={`absolute left-3 top-4 transition-colors ${
              errors.message
                ? "text-red-500"
                : "text-gray-400 group-focus-within:text-blue-500"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
          </div>
          <motion.textarea
            id="message"
            rows={6}
            value={contactForm.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none bg-white dark:bg-gray-800 ${
              errors.message
                ? "border-red-500 focus:ring-red-500/20"
                : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20"
            }`}
            placeholder="Tell me about your project, questions, or just say hello!"
            whileFocus={{ scale: 1.01 }}
            disabled={isFormSubmitting}
          />
        </div>
        <div className="flex justify-between items-center mt-1">
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm text-red-500 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
          <span className="text-xs text-gray-500 ml-auto">
            {contactForm.message.length}/500
          </span>
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          type="submit"
          disabled={isFormSubmitting}
          className={`w-full group relative overflow-hidden rounded-xl py-4 px-6 font-semibold text-white transition-all duration-300 ${
            isFormSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
          }`}
          whileHover={!isFormSubmitting ? { scale: 1.02, y: -2 } : {}}
          whileTap={!isFormSubmitting ? { scale: 0.98 } : {}}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ x: "-100%" }}
            whileHover={!isFormSubmitting ? { x: "0%" } : {}}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10 flex items-center justify-center space-x-2">
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Loader2 className="w-5 h-5 animate-spin" />
                </motion.div>
              ) : status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <CheckCircle className="w-5 h-5" />
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <AlertCircle className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="send"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              )}
            </AnimatePresence>

            <span>
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Try Again"
                    : "Send Message"}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Form Footer */}
      <motion.div
        className="text-center text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>Usually respond within 24 hours • All fields are required</p>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
